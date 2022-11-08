import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import * as sty from '../styles/global';

export function Footer() {
    const data = useStaticQuery(graphql`
        query {
            currentBuildDate {
                currentDate
            }
        }
    `);
    return (
        <sty.footer>
            <sty.footer.text>Powered by 
                <sty.footer.link href="https://gatsbyjs.com"> Gatsby </sty.footer.link>
            </sty.footer.text>
            <sty.footer.text>Last Updated: {data.currentBuildDate.currentDate}</sty.footer.text>
        </sty.footer>
    );
}
