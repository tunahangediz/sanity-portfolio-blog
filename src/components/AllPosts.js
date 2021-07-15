import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import { Link } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
const AllPosts = () => {
    const [allPost, setAllPost] = useState(null);

    function toPlainText(blocks = []) {
        return (
            blocks
                // loop through each block
                .map((block) => {
                    // if it's not a text block with children,
                    // return nothing
                    if (block._type !== "block" || !block.children) {
                        return "";
                    }
                    // loop through the children spans, and join the
                    // text strings
                    return block.children.map((child) => child.text).join("");
                })
                // join the paragraphs leaving split by two linebreaks
                .join("\n\n")
        );
    }

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]{
            title,
            slug,
            body,
           
            mainImage{
              asset->{
              _id,
              url
            }
           
          }
        }`,
            )
            .then((data) => setAllPost(data))
            .catch(console.error);
    }, []);
    return (
        <div>
            <h2>Blog Posts</h2>
            <h3>Welcome to my blog posts page!</h3>
            <div className="post-grid">
                {allPost &&
                    allPost.map((post, index) => (
                        <div className="card" key={index}>
                            <Link
                                to={"/" + post.slug.current}
                                key={post.slug.current}
                            >
                                <div className="img-div">
                                    <img
                                        // style={{ width: "350px" }}
                                        src={post.mainImage.asset.url}
                                        alt=""
                                    />
                                </div>
                                <div className="card-body">
                                    <h3>{post.title}</h3>
                                    <div class="preview">
                                        <BlockContent
                                            blocks={post.body}
                                            imageOptions={{
                                                w: 1,
                                                h: 1,
                                            }}
                                            projectId={
                                                sanityClient.clientConfig
                                                    .projectId
                                            }
                                            dataset={
                                                sanityClient.clientConfig
                                                    .dataset
                                            }
                                        />
                                    </div>
                                    <span className="read-more">
                                        Devamını Oku →
                                    </span>
                                </div>
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default AllPosts;
