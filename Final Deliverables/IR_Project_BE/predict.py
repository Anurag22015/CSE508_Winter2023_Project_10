from transformers import BertTokenizer, BertForSequenceClassification
import torch
import numpy as np
import locationtagger
import nltk
import spacy
 
# essential entity models downloads
nltk.downloader.download('maxent_ne_chunker')
nltk.downloader.download('words')
nltk.downloader.download('treebank')
nltk.downloader.download('maxent_treebank_pos_tagger')
nltk.downloader.download('punkt')
nltk.download('averaged_perceptron_tagger')


device = torch.device('cpu')

model = BertForSequenceClassification.from_pretrained('model')
model = model.to(device)


tokenizer = BertTokenizer.from_pretrained(
    'bert-base-uncased',
    do_lower_case = True
    )



def preprocessing(input_text, tokenizer):
  return tokenizer.encode_plus(
                        input_text,
                        add_special_tokens = True,
                        max_length = 32,
                        pad_to_max_length = True,
                        return_attention_mask = True,
                        return_tensors = 'pt'
                   )




def fetchLocations(df):
    l=['countries','region_cities', 'cities','country_regions','country_cities','other_countries',
        'region_cities','other_regions']
    # initializing sample text
    locations=[]
    # extracting entities.
    for i in range (0,df.shape[0]):
        place_entity = locationtagger.find_locations(text = df.iloc[i]['text'])
        for j in range(0,len(l)):
            d=eval('place_entity'+'.'+l[j])
            if isinstance(d, list):
                locations=locations+d
            elif isinstance(d, dict):
                for key, value in d.items():
                    locations.append(key)
    return locations


def predict(df):
    test_ids = []
    test_attention_mask = []
    if(df.empty):
        return
    else:
        for sentence in df['text']:
            encoding = preprocessing(sentence, tokenizer)
            test_ids.append(encoding['input_ids'])
            test_attention_mask.append(encoding['attention_mask'])
        test_ids = torch.cat(test_ids, dim=0)
        test_attention_mask = torch.cat(test_attention_mask, dim=0)
        # Forward pass, calculate logit predictions
        with torch.no_grad():
            output = model(test_ids.to(device), token_type_ids = None, attention_mask = test_attention_mask.to(device))
        predictions = np.argmax(output.logits.cpu().numpy(), axis=1)
        predicted_classes = [pred  for pred in predictions]
        df['Predicted Class'] = predicted_classes
        df = df.drop(df.loc[df['Predicted Class']==0].index)
        locations = fetchLocations(df)
        return(locations)


# print(predict())