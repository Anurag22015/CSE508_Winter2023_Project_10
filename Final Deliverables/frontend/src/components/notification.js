import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const Notification = () => {
    const mapHtml = `
        <iframe src="public/map.html" style="width: 100%; height: 500px;"></iframe>
    `;

    return (
        <div>
            <h2>Earthquake Hit in </h2>
            {ReactHtmlParser(`
                <div id="map-container">
                    ${mapHtml}
                </div>
            `)}
        </div>
    );
}

export default Notification;
