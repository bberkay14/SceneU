/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      email
      ppImageUri
      posts {
        items {
          id
          videoUri
          description
          userID
          songID
          createdAt
          hashtagID
          updatedAt
        }
        nextToken
      }
      questions {
        items {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
        }
        nextToken
      }
      postToVotes {
        items {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
          hashTagPollPostsId
        }
        nextToken
      }
      votes {
        items {
          id
          userID
          optionID
          createdAt
          updatedAt
        }
        nextToken
      }
      authoredComment {
        items {
          id
          videoUri
          description
          userID
          createdAt
          postID
          songID
          hashtagID
          updatedAt
        }
        nextToken
      }
      authoredCommentQu {
        items {
          id
          videoUri
          description
          userID
          createdAt
          postID
          updatedAt
        }
        nextToken
      }
      authoredCommentPoll {
        items {
          id
          videoUri
          description
          userID
          createdAt
          postID
          updatedAt
        }
        nextToken
      }
      authoredCommentToComment {
        items {
          id
          description
          userID
          createdAt
          updatedAt
          commentHasRepliesId
          commentQuHasRepliesId
          commentPollHasRepliesId
        }
        nextToken
      }
      createdAt
      updatedAt
      commentToCommentLikedById
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      email
      ppImageUri
      posts {
        items {
          id
          videoUri
          description
          userID
          songID
          createdAt
          hashtagID
          updatedAt
        }
        nextToken
      }
      questions {
        items {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
        }
        nextToken
      }
      postToVotes {
        items {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
          hashTagPollPostsId
        }
        nextToken
      }
      votes {
        items {
          id
          userID
          optionID
          createdAt
          updatedAt
        }
        nextToken
      }
      authoredComment {
        items {
          id
          videoUri
          description
          userID
          createdAt
          postID
          songID
          hashtagID
          updatedAt
        }
        nextToken
      }
      authoredCommentQu {
        items {
          id
          videoUri
          description
          userID
          createdAt
          postID
          updatedAt
        }
        nextToken
      }
      authoredCommentPoll {
        items {
          id
          videoUri
          description
          userID
          createdAt
          postID
          updatedAt
        }
        nextToken
      }
      authoredCommentToComment {
        items {
          id
          description
          userID
          createdAt
          updatedAt
          commentHasRepliesId
          commentQuHasRepliesId
          commentPollHasRepliesId
        }
        nextToken
      }
      createdAt
      updatedAt
      commentToCommentLikedById
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      email
      ppImageUri
      posts {
        items {
          id
          videoUri
          description
          userID
          songID
          createdAt
          hashtagID
          updatedAt
        }
        nextToken
      }
      questions {
        items {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
        }
        nextToken
      }
      postToVotes {
        items {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
          hashTagPollPostsId
        }
        nextToken
      }
      votes {
        items {
          id
          userID
          optionID
          createdAt
          updatedAt
        }
        nextToken
      }
      authoredComment {
        items {
          id
          videoUri
          description
          userID
          createdAt
          postID
          songID
          hashtagID
          updatedAt
        }
        nextToken
      }
      authoredCommentQu {
        items {
          id
          videoUri
          description
          userID
          createdAt
          postID
          updatedAt
        }
        nextToken
      }
      authoredCommentPoll {
        items {
          id
          videoUri
          description
          userID
          createdAt
          postID
          updatedAt
        }
        nextToken
      }
      authoredCommentToComment {
        items {
          id
          description
          userID
          createdAt
          updatedAt
          commentHasRepliesId
          commentQuHasRepliesId
          commentPollHasRepliesId
        }
        nextToken
      }
      createdAt
      updatedAt
      commentToCommentLikedById
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      videoUri
      description
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      songID
      song {
        id
        name
        imageUri
        createdAt
        updatedAt
      }
      createdAt
      comments {
        items {
          id
          videoUri
          description
          userID
          createdAt
          postID
          songID
          hashtagID
          updatedAt
        }
        nextToken
      }
      hashtagID
      hashtag {
        id
        nameHT
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      videoUri
      description
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      songID
      song {
        id
        name
        imageUri
        createdAt
        updatedAt
      }
      createdAt
      comments {
        items {
          id
          videoUri
          description
          userID
          createdAt
          postID
          songID
          hashtagID
          updatedAt
        }
        nextToken
      }
      hashtagID
      hashtag {
        id
        nameHT
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      videoUri
      description
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      songID
      song {
        id
        name
        imageUri
        createdAt
        updatedAt
      }
      createdAt
      comments {
        items {
          id
          videoUri
          description
          userID
          createdAt
          postID
          songID
          hashtagID
          updatedAt
        }
        nextToken
      }
      hashtagID
      hashtag {
        id
        nameHT
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onCreateUserPostLike = /* GraphQL */ `
  subscription OnCreateUserPostLike {
    onCreateUserPostLike {
      id
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      postID
      post {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        songID
        song {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        comments {
          nextToken
        }
        hashtagID
        hashtag {
          id
          nameHT
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserPostLike = /* GraphQL */ `
  subscription OnUpdateUserPostLike {
    onUpdateUserPostLike {
      id
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      postID
      post {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        songID
        song {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        comments {
          nextToken
        }
        hashtagID
        hashtag {
          id
          nameHT
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserPostLike = /* GraphQL */ `
  subscription OnDeleteUserPostLike {
    onDeleteUserPostLike {
      id
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      postID
      post {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        songID
        song {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        comments {
          nextToken
        }
        hashtagID
        hashtag {
          id
          nameHT
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserCommentLike = /* GraphQL */ `
  subscription OnCreateUserCommentLike {
    onCreateUserCommentLike {
      id
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      commentID
      comment {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        createdAt
        postID
        post {
          id
          videoUri
          description
          userID
          songID
          createdAt
          hashtagID
          updatedAt
        }
        songID
        song {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        hasReplies {
          nextToken
        }
        hashtagID
        hashtags {
          id
          nameHT
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserCommentLike = /* GraphQL */ `
  subscription OnUpdateUserCommentLike {
    onUpdateUserCommentLike {
      id
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      commentID
      comment {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        createdAt
        postID
        post {
          id
          videoUri
          description
          userID
          songID
          createdAt
          hashtagID
          updatedAt
        }
        songID
        song {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        hasReplies {
          nextToken
        }
        hashtagID
        hashtags {
          id
          nameHT
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserCommentLike = /* GraphQL */ `
  subscription OnDeleteUserCommentLike {
    onDeleteUserCommentLike {
      id
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      commentID
      comment {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        createdAt
        postID
        post {
          id
          videoUri
          description
          userID
          songID
          createdAt
          hashtagID
          updatedAt
        }
        songID
        song {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        hasReplies {
          nextToken
        }
        hashtagID
        hashtags {
          id
          nameHT
          createdAt
          updatedAt
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
      id
      videoUri
      description
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      songID
      song {
        id
        name
        imageUri
        createdAt
        updatedAt
      }
      createdAt
      comments {
        items {
          id
          videoUri
          description
          userID
          createdAt
          postID
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
      id
      videoUri
      description
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      songID
      song {
        id
        name
        imageUri
        createdAt
        updatedAt
      }
      createdAt
      comments {
        items {
          id
          videoUri
          description
          userID
          createdAt
          postID
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
      id
      videoUri
      description
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      songID
      song {
        id
        name
        imageUri
        createdAt
        updatedAt
      }
      createdAt
      comments {
        items {
          id
          videoUri
          description
          userID
          createdAt
          postID
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onCreateUserQuestionLike = /* GraphQL */ `
  subscription OnCreateUserQuestionLike {
    onCreateUserQuestionLike {
      id
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      postID
      post {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        songID
        song {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        comments {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserQuestionLike = /* GraphQL */ `
  subscription OnUpdateUserQuestionLike {
    onUpdateUserQuestionLike {
      id
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      postID
      post {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        songID
        song {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        comments {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserQuestionLike = /* GraphQL */ `
  subscription OnDeleteUserQuestionLike {
    onDeleteUserQuestionLike {
      id
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      postID
      post {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        songID
        song {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        comments {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserCommentQuLike = /* GraphQL */ `
  subscription OnCreateUserCommentQuLike {
    onCreateUserCommentQuLike {
      id
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      commentID
      comment {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        createdAt
        postID
        post {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
        }
        hasReplies {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserCommentQuLike = /* GraphQL */ `
  subscription OnUpdateUserCommentQuLike {
    onUpdateUserCommentQuLike {
      id
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      commentID
      comment {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        createdAt
        postID
        post {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
        }
        hasReplies {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserCommentQuLike = /* GraphQL */ `
  subscription OnDeleteUserCommentQuLike {
    onDeleteUserCommentQuLike {
      id
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      commentID
      comment {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        createdAt
        postID
        post {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
        }
        hasReplies {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePostToVote = /* GraphQL */ `
  subscription OnCreatePostToVote {
    onCreatePostToVote {
      id
      videoUri
      description
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      songID
      song {
        id
        name
        imageUri
        createdAt
        updatedAt
      }
      createdAt
      comments {
        items {
          id
          videoUri
          description
          userID
          createdAt
          postID
          updatedAt
        }
        nextToken
      }
      updatedAt
      hashTagPollPostsId
    }
  }
`;
export const onUpdatePostToVote = /* GraphQL */ `
  subscription OnUpdatePostToVote {
    onUpdatePostToVote {
      id
      videoUri
      description
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      songID
      song {
        id
        name
        imageUri
        createdAt
        updatedAt
      }
      createdAt
      comments {
        items {
          id
          videoUri
          description
          userID
          createdAt
          postID
          updatedAt
        }
        nextToken
      }
      updatedAt
      hashTagPollPostsId
    }
  }
`;
export const onDeletePostToVote = /* GraphQL */ `
  subscription OnDeletePostToVote {
    onDeletePostToVote {
      id
      videoUri
      description
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      songID
      song {
        id
        name
        imageUri
        createdAt
        updatedAt
      }
      createdAt
      comments {
        items {
          id
          videoUri
          description
          userID
          createdAt
          postID
          updatedAt
        }
        nextToken
      }
      updatedAt
      hashTagPollPostsId
    }
  }
`;
export const onCreateUserPostToVoteLike = /* GraphQL */ `
  subscription OnCreateUserPostToVoteLike {
    onCreateUserPostToVoteLike {
      id
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      postID
      post {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        songID
        song {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        comments {
          nextToken
        }
        updatedAt
        hashTagPollPostsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserPostToVoteLike = /* GraphQL */ `
  subscription OnUpdateUserPostToVoteLike {
    onUpdateUserPostToVoteLike {
      id
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      postID
      post {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        songID
        song {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        comments {
          nextToken
        }
        updatedAt
        hashTagPollPostsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserPostToVoteLike = /* GraphQL */ `
  subscription OnDeleteUserPostToVoteLike {
    onDeleteUserPostToVoteLike {
      id
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      postID
      post {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        songID
        song {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        comments {
          nextToken
        }
        updatedAt
        hashTagPollPostsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserCommentPollLike = /* GraphQL */ `
  subscription OnCreateUserCommentPollLike {
    onCreateUserCommentPollLike {
      id
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      commentID
      comment {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        createdAt
        postID
        post {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
          hashTagPollPostsId
        }
        hasReplies {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserCommentPollLike = /* GraphQL */ `
  subscription OnUpdateUserCommentPollLike {
    onUpdateUserCommentPollLike {
      id
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      commentID
      comment {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        createdAt
        postID
        post {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
          hashTagPollPostsId
        }
        hasReplies {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserCommentPollLike = /* GraphQL */ `
  subscription OnDeleteUserCommentPollLike {
    onDeleteUserCommentPollLike {
      id
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      commentID
      comment {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        createdAt
        postID
        post {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
          hashTagPollPostsId
        }
        hasReplies {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateVote = /* GraphQL */ `
  subscription OnCreateVote {
    onCreateVote {
      id
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      optionID
      options {
        id
        text
        hashTagPollID
        hashTagPoll {
          id
          nameHT
          createdAt
          updatedAt
        }
        votes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateVote = /* GraphQL */ `
  subscription OnUpdateVote {
    onUpdateVote {
      id
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      optionID
      options {
        id
        text
        hashTagPollID
        hashTagPoll {
          id
          nameHT
          createdAt
          updatedAt
        }
        votes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteVote = /* GraphQL */ `
  subscription OnDeleteVote {
    onDeleteVote {
      id
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      optionID
      options {
        id
        text
        hashTagPollID
        hashTagPoll {
          id
          nameHT
          createdAt
          updatedAt
        }
        votes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      videoUri
      description
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      createdAt
      postID
      post {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        songID
        song {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        comments {
          nextToken
        }
        hashtagID
        hashtag {
          id
          nameHT
          createdAt
          updatedAt
        }
        updatedAt
      }
      songID
      song {
        id
        name
        imageUri
        createdAt
        updatedAt
      }
      hasReplies {
        items {
          id
          description
          userID
          createdAt
          updatedAt
          commentHasRepliesId
          commentQuHasRepliesId
          commentPollHasRepliesId
        }
        nextToken
      }
      hashtagID
      hashtags {
        id
        nameHT
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      videoUri
      description
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      createdAt
      postID
      post {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        songID
        song {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        comments {
          nextToken
        }
        hashtagID
        hashtag {
          id
          nameHT
          createdAt
          updatedAt
        }
        updatedAt
      }
      songID
      song {
        id
        name
        imageUri
        createdAt
        updatedAt
      }
      hasReplies {
        items {
          id
          description
          userID
          createdAt
          updatedAt
          commentHasRepliesId
          commentQuHasRepliesId
          commentPollHasRepliesId
        }
        nextToken
      }
      hashtagID
      hashtags {
        id
        nameHT
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      videoUri
      description
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      createdAt
      postID
      post {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        songID
        song {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        comments {
          nextToken
        }
        hashtagID
        hashtag {
          id
          nameHT
          createdAt
          updatedAt
        }
        updatedAt
      }
      songID
      song {
        id
        name
        imageUri
        createdAt
        updatedAt
      }
      hasReplies {
        items {
          id
          description
          userID
          createdAt
          updatedAt
          commentHasRepliesId
          commentQuHasRepliesId
          commentPollHasRepliesId
        }
        nextToken
      }
      hashtagID
      hashtags {
        id
        nameHT
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const onCreateCommentQu = /* GraphQL */ `
  subscription OnCreateCommentQu {
    onCreateCommentQu {
      id
      videoUri
      description
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      createdAt
      postID
      post {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        songID
        song {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        comments {
          nextToken
        }
        updatedAt
      }
      hasReplies {
        items {
          id
          description
          userID
          createdAt
          updatedAt
          commentHasRepliesId
          commentQuHasRepliesId
          commentPollHasRepliesId
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onUpdateCommentQu = /* GraphQL */ `
  subscription OnUpdateCommentQu {
    onUpdateCommentQu {
      id
      videoUri
      description
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      createdAt
      postID
      post {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        songID
        song {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        comments {
          nextToken
        }
        updatedAt
      }
      hasReplies {
        items {
          id
          description
          userID
          createdAt
          updatedAt
          commentHasRepliesId
          commentQuHasRepliesId
          commentPollHasRepliesId
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onDeleteCommentQu = /* GraphQL */ `
  subscription OnDeleteCommentQu {
    onDeleteCommentQu {
      id
      videoUri
      description
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      createdAt
      postID
      post {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        songID
        song {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        comments {
          nextToken
        }
        updatedAt
      }
      hasReplies {
        items {
          id
          description
          userID
          createdAt
          updatedAt
          commentHasRepliesId
          commentQuHasRepliesId
          commentPollHasRepliesId
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onCreateCommentPoll = /* GraphQL */ `
  subscription OnCreateCommentPoll {
    onCreateCommentPoll {
      id
      videoUri
      description
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      createdAt
      postID
      post {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        songID
        song {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        comments {
          nextToken
        }
        updatedAt
        hashTagPollPostsId
      }
      hasReplies {
        items {
          id
          description
          userID
          createdAt
          updatedAt
          commentHasRepliesId
          commentQuHasRepliesId
          commentPollHasRepliesId
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onUpdateCommentPoll = /* GraphQL */ `
  subscription OnUpdateCommentPoll {
    onUpdateCommentPoll {
      id
      videoUri
      description
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      createdAt
      postID
      post {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        songID
        song {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        comments {
          nextToken
        }
        updatedAt
        hashTagPollPostsId
      }
      hasReplies {
        items {
          id
          description
          userID
          createdAt
          updatedAt
          commentHasRepliesId
          commentQuHasRepliesId
          commentPollHasRepliesId
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onDeleteCommentPoll = /* GraphQL */ `
  subscription OnDeleteCommentPoll {
    onDeleteCommentPoll {
      id
      videoUri
      description
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      createdAt
      postID
      post {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        songID
        song {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        comments {
          nextToken
        }
        updatedAt
        hashTagPollPostsId
      }
      hasReplies {
        items {
          id
          description
          userID
          createdAt
          updatedAt
          commentHasRepliesId
          commentQuHasRepliesId
          commentPollHasRepliesId
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onCreateCommentToComment = /* GraphQL */ `
  subscription OnCreateCommentToComment {
    onCreateCommentToComment {
      id
      description
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      createdAt
      likedBy {
        items {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        nextToken
      }
      updatedAt
      commentHasRepliesId
      commentQuHasRepliesId
      commentPollHasRepliesId
    }
  }
`;
export const onUpdateCommentToComment = /* GraphQL */ `
  subscription OnUpdateCommentToComment {
    onUpdateCommentToComment {
      id
      description
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      createdAt
      likedBy {
        items {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        nextToken
      }
      updatedAt
      commentHasRepliesId
      commentQuHasRepliesId
      commentPollHasRepliesId
    }
  }
`;
export const onDeleteCommentToComment = /* GraphQL */ `
  subscription OnDeleteCommentToComment {
    onDeleteCommentToComment {
      id
      description
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      createdAt
      likedBy {
        items {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        nextToken
      }
      updatedAt
      commentHasRepliesId
      commentQuHasRepliesId
      commentPollHasRepliesId
    }
  }
`;
export const onCreateUserCommentToCommentLike = /* GraphQL */ `
  subscription OnCreateUserCommentToCommentLike {
    onCreateUserCommentToCommentLike {
      id
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      commentID
      comment {
        id
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        createdAt
        likedBy {
          nextToken
        }
        updatedAt
        commentHasRepliesId
        commentQuHasRepliesId
        commentPollHasRepliesId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserCommentToCommentLike = /* GraphQL */ `
  subscription OnUpdateUserCommentToCommentLike {
    onUpdateUserCommentToCommentLike {
      id
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      commentID
      comment {
        id
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        createdAt
        likedBy {
          nextToken
        }
        updatedAt
        commentHasRepliesId
        commentQuHasRepliesId
        commentPollHasRepliesId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserCommentToCommentLike = /* GraphQL */ `
  subscription OnDeleteUserCommentToCommentLike {
    onDeleteUserCommentToCommentLike {
      id
      userID
      user {
        id
        username
        email
        ppImageUri
        posts {
          nextToken
        }
        questions {
          nextToken
        }
        postToVotes {
          nextToken
        }
        votes {
          nextToken
        }
        authoredComment {
          nextToken
        }
        authoredCommentQu {
          nextToken
        }
        authoredCommentPoll {
          nextToken
        }
        authoredCommentToComment {
          nextToken
        }
        createdAt
        updatedAt
        commentToCommentLikedById
      }
      commentID
      comment {
        id
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        createdAt
        likedBy {
          nextToken
        }
        updatedAt
        commentHasRepliesId
        commentQuHasRepliesId
        commentPollHasRepliesId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateHashTag = /* GraphQL */ `
  subscription OnCreateHashTag {
    onCreateHashTag {
      id
      nameHT
      posts {
        items {
          id
          videoUri
          description
          userID
          songID
          createdAt
          hashtagID
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          videoUri
          description
          userID
          createdAt
          postID
          songID
          hashtagID
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateHashTag = /* GraphQL */ `
  subscription OnUpdateHashTag {
    onUpdateHashTag {
      id
      nameHT
      posts {
        items {
          id
          videoUri
          description
          userID
          songID
          createdAt
          hashtagID
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          videoUri
          description
          userID
          createdAt
          postID
          songID
          hashtagID
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteHashTag = /* GraphQL */ `
  subscription OnDeleteHashTag {
    onDeleteHashTag {
      id
      nameHT
      posts {
        items {
          id
          videoUri
          description
          userID
          songID
          createdAt
          hashtagID
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          videoUri
          description
          userID
          createdAt
          postID
          songID
          hashtagID
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateHashTagQu = /* GraphQL */ `
  subscription OnCreateHashTagQu {
    onCreateHashTagQu {
      id
      nameHT
      posts {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        songID
        song {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        comments {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateHashTagQu = /* GraphQL */ `
  subscription OnUpdateHashTagQu {
    onUpdateHashTagQu {
      id
      nameHT
      posts {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        songID
        song {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        comments {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteHashTagQu = /* GraphQL */ `
  subscription OnDeleteHashTagQu {
    onDeleteHashTagQu {
      id
      nameHT
      posts {
        id
        videoUri
        description
        userID
        user {
          id
          username
          email
          ppImageUri
          createdAt
          updatedAt
          commentToCommentLikedById
        }
        songID
        song {
          id
          name
          imageUri
          createdAt
          updatedAt
        }
        createdAt
        comments {
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateHashTagPoll = /* GraphQL */ `
  subscription OnCreateHashTagPoll {
    onCreateHashTagPoll {
      id
      nameHT
      posts {
        items {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
          hashTagPollPostsId
        }
        nextToken
      }
      options {
        items {
          id
          text
          hashTagPollID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateHashTagPoll = /* GraphQL */ `
  subscription OnUpdateHashTagPoll {
    onUpdateHashTagPoll {
      id
      nameHT
      posts {
        items {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
          hashTagPollPostsId
        }
        nextToken
      }
      options {
        items {
          id
          text
          hashTagPollID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteHashTagPoll = /* GraphQL */ `
  subscription OnDeleteHashTagPoll {
    onDeleteHashTagPoll {
      id
      nameHT
      posts {
        items {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
          hashTagPollPostsId
        }
        nextToken
      }
      options {
        items {
          id
          text
          hashTagPollID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOption = /* GraphQL */ `
  subscription OnCreateOption {
    onCreateOption {
      id
      text
      hashTagPollID
      hashTagPoll {
        id
        nameHT
        posts {
          nextToken
        }
        options {
          nextToken
        }
        createdAt
        updatedAt
      }
      votes {
        items {
          id
          userID
          optionID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOption = /* GraphQL */ `
  subscription OnUpdateOption {
    onUpdateOption {
      id
      text
      hashTagPollID
      hashTagPoll {
        id
        nameHT
        posts {
          nextToken
        }
        options {
          nextToken
        }
        createdAt
        updatedAt
      }
      votes {
        items {
          id
          userID
          optionID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOption = /* GraphQL */ `
  subscription OnDeleteOption {
    onDeleteOption {
      id
      text
      hashTagPollID
      hashTagPoll {
        id
        nameHT
        posts {
          nextToken
        }
        options {
          nextToken
        }
        createdAt
        updatedAt
      }
      votes {
        items {
          id
          userID
          optionID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong {
    onCreateSong {
      id
      name
      imageUri
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong {
    onUpdateSong {
      id
      name
      imageUri
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong {
    onDeleteSong {
      id
      name
      imageUri
      createdAt
      updatedAt
    }
  }
`;
