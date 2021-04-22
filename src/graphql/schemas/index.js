import { gql } from "apollo-server-express";
import CommentType from './comment';
import PostType from './post';
import UserType from './user';
import CatType from './cat';

export default [CommentType, PostType, UserType, CatType]

