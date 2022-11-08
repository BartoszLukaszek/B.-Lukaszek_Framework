import React, { FC } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Comments from "./components/Routes/Comments/Comments";
import Home from "./components/Routes/Home/home"
import Photos from "./components/Routes/Photos/photos";
import Posts from "./components/Routes/Posts/posts";
import Profile from "./components/Routes/Profile/profile";

import { Layout } from "./components/Common/layout";

const App: FC = () => {
    return (
        <Router>
            <div>
                <Link to='/'>Home</Link>
                <Link to='posts'>Posts</Link>
                <Link to='profile'>Profile</Link>
                <Link to='photos'>Photos</Link>
                <Link to='comments'>Comments</Link>
            </div>
            <Layout>
                <Routes>
                    <Route path="posts" element={<Posts />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="photos" element={<Photos />} />
                    <Route path="comments" element={<Comments />} />
                    <Route index element={<Home />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;

