import React from 'react';
import * as sty from '../styles/global';
import * as config from '../../config';
import {graphql, useStaticQuery} from 'gatsby';
import {Icons} from './icons';

export function Bio() {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {title: {eq: "Description"}}}) {
          edges {
            node {
              html
            }
          }
        }
      }
    `);
  
    return (
        <sty.bio>
            <sty.name>
                <sty.name.formal>{config.formalName}</sty.name.formal>
                <sty.name.alter>{config.alterName}</sty.name.alter>
            </sty.name>
                <sty.section.description dangerouslySetInnerHTML={{__html: data.allMarkdownRemark.edges[0].node.html}} />
            <Icons/>
        </sty.bio>
    );
}