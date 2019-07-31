import React from "react"
import { graphql } from "gatsby"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Img from "gatsby-image"
import projects from "../data/albums.json"
import "./style.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { edges: coverImgData } = data.CoverImgs;

  return (
  <Layout>
    <SEO title="Home" />

    {/* <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> */}
    {/* <h4 style={{marginLeft: `1.0875rem` }}>Experience The Summit</h4> */}


    {/** Map through cover images */}
    {projects.map(project => {

      console.log(project);
      console.log(coverImgData);

      const image = coverImgData.find(n => {
          return n.node.relativePath === `coverImgs/${project.coverImg}`;
      });
      console.log("image:", image.node);
      const imageSizes = image.node.childImageSharp.sizes;

      return (
        <AniLink fade to={"/albums/" + project.url}>
          <div class="cover-img">
            <div class="overlay">
              <div class="text">
                <h3>{project.title}</h3>
              </div>
            </div>
            <Img
                title={project.name}
                alt="Screenshot of Project"
                sizes={imageSizes}
                className="card-img_src center-block"
                imgStyle={{height: `70vh`}}
                style={{height: `70vh`}}
                durationFadeIn={1000}
            />
          </div>
      </AniLink>
      )

    })}

  </Layout>
)}

export default IndexPage

export const query = graphql`
  query allImgsQuery {
    CoverImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/coverImgs/.*.JPG/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            sizes(maxWidth: 4000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
}
`