/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createUserPostLike = /* GraphQL */ `
  mutation CreateUserPostLike(
    $input: CreateUserPostLikeInput!
    $condition: ModelUserPostLikeConditionInput
  ) {
    createUserPostLike(input: $input, condition: $condition) {
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
export const updateUserPostLike = /* GraphQL */ `
  mutation UpdateUserPostLike(
    $input: UpdateUserPostLikeInput!
    $condition: ModelUserPostLikeConditionInput
  ) {
    updateUserPostLike(input: $input, condition: $condition) {
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
export const deleteUserPostLike = /* GraphQL */ `
  mutation DeleteUserPostLike(
    $input: DeleteUserPostLikeInput!
    $condition: ModelUserPostLikeConditionInput
  ) {
    deleteUserPostLike(input: $input, condition: $condition) {
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
export const createUserCommentLike = /* GraphQL */ `
  mutation CreateUserCommentLike(
    $input: CreateUserCommentLikeInput!
    $condition: ModelUserCommentLikeConditionInput
  ) {
    createUserCommentLike(input: $input, condition: $condition) {
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
export const updateUserCommentLike = /* GraphQL */ `
  mutation UpdateUserCommentLike(
    $input: UpdateUserCommentLikeInput!
    $condition: ModelUserCommentLikeConditionInput
  ) {
    updateUserCommentLike(input: $input, condition: $condition) {
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
export const deleteUserCommentLike = /* GraphQL */ `
  mutation DeleteUserCommentLike(
    $input: DeleteUserCommentLikeInput!
    $condition: ModelUserCommentLikeConditionInput
  ) {
    deleteUserCommentLike(input: $input, condition: $condition) {
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
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
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
export const createUserQuestionLike = /* GraphQL */ `
  mutation CreateUserQuestionLike(
    $input: CreateUserQuestionLikeInput!
    $condition: ModelUserQuestionLikeConditionInput
  ) {
    createUserQuestionLike(input: $input, condition: $condition) {
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
export const updateUserQuestionLike = /* GraphQL */ `
  mutation UpdateUserQuestionLike(
    $input: UpdateUserQuestionLikeInput!
    $condition: ModelUserQuestionLikeConditionInput
  ) {
    updateUserQuestionLike(input: $input, condition: $condition) {
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
export const deleteUserQuestionLike = /* GraphQL */ `
  mutation DeleteUserQuestionLike(
    $input: DeleteUserQuestionLikeInput!
    $condition: ModelUserQuestionLikeConditionInput
  ) {
    deleteUserQuestionLike(input: $input, condition: $condition) {
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
export const createUserCommentQuLike = /* GraphQL */ `
  mutation CreateUserCommentQuLike(
    $input: CreateUserCommentQuLikeInput!
    $condition: ModelUserCommentQuLikeConditionInput
  ) {
    createUserCommentQuLike(input: $input, condition: $condition) {
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
export const updateUserCommentQuLike = /* GraphQL */ `
  mutation UpdateUserCommentQuLike(
    $input: UpdateUserCommentQuLikeInput!
    $condition: ModelUserCommentQuLikeConditionInput
  ) {
    updateUserCommentQuLike(input: $input, condition: $condition) {
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
export const deleteUserCommentQuLike = /* GraphQL */ `
  mutation DeleteUserCommentQuLike(
    $input: DeleteUserCommentQuLikeInput!
    $condition: ModelUserCommentQuLikeConditionInput
  ) {
    deleteUserCommentQuLike(input: $input, condition: $condition) {
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
export const createPostToVote = /* GraphQL */ `
  mutation CreatePostToVote(
    $input: CreatePostToVoteInput!
    $condition: ModelPostToVoteConditionInput
  ) {
    createPostToVote(input: $input, condition: $condition) {
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
export const updatePostToVote = /* GraphQL */ `
  mutation UpdatePostToVote(
    $input: UpdatePostToVoteInput!
    $condition: ModelPostToVoteConditionInput
  ) {
    updatePostToVote(input: $input, condition: $condition) {
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
export const deletePostToVote = /* GraphQL */ `
  mutation DeletePostToVote(
    $input: DeletePostToVoteInput!
    $condition: ModelPostToVoteConditionInput
  ) {
    deletePostToVote(input: $input, condition: $condition) {
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
export const createUserPostToVoteLike = /* GraphQL */ `
  mutation CreateUserPostToVoteLike(
    $input: CreateUserPostToVoteLikeInput!
    $condition: ModelUserPostToVoteLikeConditionInput
  ) {
    createUserPostToVoteLike(input: $input, condition: $condition) {
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
export const updateUserPostToVoteLike = /* GraphQL */ `
  mutation UpdateUserPostToVoteLike(
    $input: UpdateUserPostToVoteLikeInput!
    $condition: ModelUserPostToVoteLikeConditionInput
  ) {
    updateUserPostToVoteLike(input: $input, condition: $condition) {
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
export const deleteUserPostToVoteLike = /* GraphQL */ `
  mutation DeleteUserPostToVoteLike(
    $input: DeleteUserPostToVoteLikeInput!
    $condition: ModelUserPostToVoteLikeConditionInput
  ) {
    deleteUserPostToVoteLike(input: $input, condition: $condition) {
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
export const createUserCommentPollLike = /* GraphQL */ `
  mutation CreateUserCommentPollLike(
    $input: CreateUserCommentPollLikeInput!
    $condition: ModelUserCommentPollLikeConditionInput
  ) {
    createUserCommentPollLike(input: $input, condition: $condition) {
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
export const updateUserCommentPollLike = /* GraphQL */ `
  mutation UpdateUserCommentPollLike(
    $input: UpdateUserCommentPollLikeInput!
    $condition: ModelUserCommentPollLikeConditionInput
  ) {
    updateUserCommentPollLike(input: $input, condition: $condition) {
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
export const deleteUserCommentPollLike = /* GraphQL */ `
  mutation DeleteUserCommentPollLike(
    $input: DeleteUserCommentPollLikeInput!
    $condition: ModelUserCommentPollLikeConditionInput
  ) {
    deleteUserCommentPollLike(input: $input, condition: $condition) {
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
export const createVote = /* GraphQL */ `
  mutation CreateVote(
    $input: CreateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    createVote(input: $input, condition: $condition) {
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
export const updateVote = /* GraphQL */ `
  mutation UpdateVote(
    $input: UpdateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    updateVote(input: $input, condition: $condition) {
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
export const deleteVote = /* GraphQL */ `
  mutation DeleteVote(
    $input: DeleteVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    deleteVote(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createCommentQu = /* GraphQL */ `
  mutation CreateCommentQu(
    $input: CreateCommentQuInput!
    $condition: ModelCommentQuConditionInput
  ) {
    createCommentQu(input: $input, condition: $condition) {
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
export const updateCommentQu = /* GraphQL */ `
  mutation UpdateCommentQu(
    $input: UpdateCommentQuInput!
    $condition: ModelCommentQuConditionInput
  ) {
    updateCommentQu(input: $input, condition: $condition) {
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
export const deleteCommentQu = /* GraphQL */ `
  mutation DeleteCommentQu(
    $input: DeleteCommentQuInput!
    $condition: ModelCommentQuConditionInput
  ) {
    deleteCommentQu(input: $input, condition: $condition) {
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
export const createCommentPoll = /* GraphQL */ `
  mutation CreateCommentPoll(
    $input: CreateCommentPollInput!
    $condition: ModelCommentPollConditionInput
  ) {
    createCommentPoll(input: $input, condition: $condition) {
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
export const updateCommentPoll = /* GraphQL */ `
  mutation UpdateCommentPoll(
    $input: UpdateCommentPollInput!
    $condition: ModelCommentPollConditionInput
  ) {
    updateCommentPoll(input: $input, condition: $condition) {
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
export const deleteCommentPoll = /* GraphQL */ `
  mutation DeleteCommentPoll(
    $input: DeleteCommentPollInput!
    $condition: ModelCommentPollConditionInput
  ) {
    deleteCommentPoll(input: $input, condition: $condition) {
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
export const createCommentToComment = /* GraphQL */ `
  mutation CreateCommentToComment(
    $input: CreateCommentToCommentInput!
    $condition: ModelCommentToCommentConditionInput
  ) {
    createCommentToComment(input: $input, condition: $condition) {
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
export const updateCommentToComment = /* GraphQL */ `
  mutation UpdateCommentToComment(
    $input: UpdateCommentToCommentInput!
    $condition: ModelCommentToCommentConditionInput
  ) {
    updateCommentToComment(input: $input, condition: $condition) {
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
export const deleteCommentToComment = /* GraphQL */ `
  mutation DeleteCommentToComment(
    $input: DeleteCommentToCommentInput!
    $condition: ModelCommentToCommentConditionInput
  ) {
    deleteCommentToComment(input: $input, condition: $condition) {
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
export const createUserCommentToCommentLike = /* GraphQL */ `
  mutation CreateUserCommentToCommentLike(
    $input: CreateUserCommentToCommentLikeInput!
    $condition: ModelUserCommentToCommentLikeConditionInput
  ) {
    createUserCommentToCommentLike(input: $input, condition: $condition) {
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
export const updateUserCommentToCommentLike = /* GraphQL */ `
  mutation UpdateUserCommentToCommentLike(
    $input: UpdateUserCommentToCommentLikeInput!
    $condition: ModelUserCommentToCommentLikeConditionInput
  ) {
    updateUserCommentToCommentLike(input: $input, condition: $condition) {
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
export const deleteUserCommentToCommentLike = /* GraphQL */ `
  mutation DeleteUserCommentToCommentLike(
    $input: DeleteUserCommentToCommentLikeInput!
    $condition: ModelUserCommentToCommentLikeConditionInput
  ) {
    deleteUserCommentToCommentLike(input: $input, condition: $condition) {
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
export const createHashTag = /* GraphQL */ `
  mutation CreateHashTag(
    $input: CreateHashTagInput!
    $condition: ModelHashTagConditionInput
  ) {
    createHashTag(input: $input, condition: $condition) {
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
export const updateHashTag = /* GraphQL */ `
  mutation UpdateHashTag(
    $input: UpdateHashTagInput!
    $condition: ModelHashTagConditionInput
  ) {
    updateHashTag(input: $input, condition: $condition) {
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
export const deleteHashTag = /* GraphQL */ `
  mutation DeleteHashTag(
    $input: DeleteHashTagInput!
    $condition: ModelHashTagConditionInput
  ) {
    deleteHashTag(input: $input, condition: $condition) {
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
export const createHashTagQu = /* GraphQL */ `
  mutation CreateHashTagQu(
    $input: CreateHashTagQuInput!
    $condition: ModelHashTagQuConditionInput
  ) {
    createHashTagQu(input: $input, condition: $condition) {
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
export const updateHashTagQu = /* GraphQL */ `
  mutation UpdateHashTagQu(
    $input: UpdateHashTagQuInput!
    $condition: ModelHashTagQuConditionInput
  ) {
    updateHashTagQu(input: $input, condition: $condition) {
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
export const deleteHashTagQu = /* GraphQL */ `
  mutation DeleteHashTagQu(
    $input: DeleteHashTagQuInput!
    $condition: ModelHashTagQuConditionInput
  ) {
    deleteHashTagQu(input: $input, condition: $condition) {
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
export const createHashTagPoll = /* GraphQL */ `
  mutation CreateHashTagPoll(
    $input: CreateHashTagPollInput!
    $condition: ModelHashTagPollConditionInput
  ) {
    createHashTagPoll(input: $input, condition: $condition) {
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
export const updateHashTagPoll = /* GraphQL */ `
  mutation UpdateHashTagPoll(
    $input: UpdateHashTagPollInput!
    $condition: ModelHashTagPollConditionInput
  ) {
    updateHashTagPoll(input: $input, condition: $condition) {
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
export const deleteHashTagPoll = /* GraphQL */ `
  mutation DeleteHashTagPoll(
    $input: DeleteHashTagPollInput!
    $condition: ModelHashTagPollConditionInput
  ) {
    deleteHashTagPoll(input: $input, condition: $condition) {
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
export const createOption = /* GraphQL */ `
  mutation CreateOption(
    $input: CreateOptionInput!
    $condition: ModelOptionConditionInput
  ) {
    createOption(input: $input, condition: $condition) {
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
export const updateOption = /* GraphQL */ `
  mutation UpdateOption(
    $input: UpdateOptionInput!
    $condition: ModelOptionConditionInput
  ) {
    updateOption(input: $input, condition: $condition) {
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
export const deleteOption = /* GraphQL */ `
  mutation DeleteOption(
    $input: DeleteOptionInput!
    $condition: ModelOptionConditionInput
  ) {
    deleteOption(input: $input, condition: $condition) {
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
export const createSong = /* GraphQL */ `
  mutation CreateSong(
    $input: CreateSongInput!
    $condition: ModelSongConditionInput
  ) {
    createSong(input: $input, condition: $condition) {
      id
      name
      imageUri
      createdAt
      updatedAt
    }
  }
`;
export const updateSong = /* GraphQL */ `
  mutation UpdateSong(
    $input: UpdateSongInput!
    $condition: ModelSongConditionInput
  ) {
    updateSong(input: $input, condition: $condition) {
      id
      name
      imageUri
      createdAt
      updatedAt
    }
  }
`;
export const deleteSong = /* GraphQL */ `
  mutation DeleteSong(
    $input: DeleteSongInput!
    $condition: ModelSongConditionInput
  ) {
    deleteSong(input: $input, condition: $condition) {
      id
      name
      imageUri
      createdAt
      updatedAt
    }
  }
`;
