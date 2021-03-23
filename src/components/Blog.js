import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"

import { Link } from "gatsby"
import MyImage from "./LazyImage"
const Blog = ({ id, title, image, createdDate, category, slug, desc }) => {
  return (
    <Link to={`/blogs/${slug}`} className="blog" key={id}>
      <article>
        {image && (
          <div className="blog-img">
            <MyImage src={image} height={"230px"} />
          </div>
        )}
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{createdDate}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdDate: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Blog
