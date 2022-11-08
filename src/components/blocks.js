import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import * as sty from '../styles/global';

export function Blocks() {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                filter: {frontmatter: {order: {gt: 0}}}
                sort: {fields: frontmatter___order, order: ASC}
            ) {
                nodes {
                    html
                    frontmatter {
                        title
                    }
                }
            }
        }
    `);
    return (
        <div>
            {data.allMarkdownRemark.nodes.map((node) => (
                <sty.section>
                    <sty.section.heading>{node.frontmatter.title}</sty.section.heading>
                    <sty.section.block dangerouslySetInnerHTML={{__html: node.html}} />
                </sty.section>
            ))}
        </div>
    );
}
