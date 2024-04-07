import React from 'react';
import { Link } from 'react-router-dom';
import { Ipost } from '../../interfaces/interface';
import { Grid, Icon } from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
interface Props {
  blogsData: Ipost[];
}

const SingleItem: React.FC<Props> = ({ blogsData }) => {
  return (
    <div className="sm:w-full overflow-hidden mx-auto">
      <Grid container spacing={2}>
        {blogsData.map((post: Ipost, index: number) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
            <section className="border border-jacarta-200 rounded-md p-4 flex flex-col justify-between h-full">
              <div className="mb-3">
                <Link to={`/singleBlog/${post.id}`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    height="240px"
                    width="240px"
                  />
                </Link>
              </div>
             
              <div className="mb-3 flex justify-between">
                <span className="inline-flex items-center space-x-1 text-accent">
                  {post.categories.map((category, index) => (
                    <a key={index} href="#">
                      {category}
                    </a>
                  ))}
                </span>
                <div>
                <Icon>
                  <AddShoppingCartOutlinedIcon />
                </Icon>
                </div>
              </div>
              <h2 className="mb-2 font-display text-md line-clamp-2">
                <Link target="_blank" to={`/singleBlog/${post.id}`}>
                {post.title}
                </Link>
              </h2>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>
                ₹ {post.price}
                </span>
              </div>
             
            </section>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SingleItem;
