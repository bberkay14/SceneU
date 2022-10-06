/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodos = /* GraphQL */ `
  query GetTodos {
    getTodos {
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
export const searchUsers = /* GraphQL */ `
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: [SearchableUserSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableUserAggregationInput]
  ) {
    searchUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchPosts = /* GraphQL */ `
  query SearchPosts(
    $filter: SearchablePostFilterInput
    $sort: [SearchablePostSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchablePostAggregationInput]
  ) {
    searchPosts(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchUserPostLikes = /* GraphQL */ `
  query SearchUserPostLikes(
    $filter: SearchableUserPostLikeFilterInput
    $sort: [SearchableUserPostLikeSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableUserPostLikeAggregationInput]
  ) {
    searchUserPostLikes(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
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
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchUserCommentLikes = /* GraphQL */ `
  query SearchUserCommentLikes(
    $filter: SearchableUserCommentLikeFilterInput
    $sort: [SearchableUserCommentLikeSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableUserCommentLikeAggregationInput]
  ) {
    searchUserCommentLikes(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
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
        commentID
        comment {
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
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchQuestions = /* GraphQL */ `
  query SearchQuestions(
    $filter: SearchableQuestionFilterInput
    $sort: [SearchableQuestionSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableQuestionAggregationInput]
  ) {
    searchQuestions(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchUserQuestionLikes = /* GraphQL */ `
  query SearchUserQuestionLikes(
    $filter: SearchableUserQuestionLikeFilterInput
    $sort: [SearchableUserQuestionLikeSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableUserQuestionLikeAggregationInput]
  ) {
    searchUserQuestionLikes(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
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
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchUserCommentQuLikes = /* GraphQL */ `
  query SearchUserCommentQuLikes(
    $filter: SearchableUserCommentQuLikeFilterInput
    $sort: [SearchableUserCommentQuLikeSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableUserCommentQuLikeAggregationInput]
  ) {
    searchUserCommentQuLikes(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
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
        commentID
        comment {
          id
          videoUri
          description
          userID
          createdAt
          postID
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchPostToVotes = /* GraphQL */ `
  query SearchPostToVotes(
    $filter: SearchablePostToVoteFilterInput
    $sort: [SearchablePostToVoteSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchablePostToVoteAggregationInput]
  ) {
    searchPostToVotes(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchUserPostToVoteLikes = /* GraphQL */ `
  query SearchUserPostToVoteLikes(
    $filter: SearchableUserPostToVoteLikeFilterInput
    $sort: [SearchableUserPostToVoteLikeSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableUserPostToVoteLikeAggregationInput]
  ) {
    searchUserPostToVoteLikes(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
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
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchUserCommentPollLikes = /* GraphQL */ `
  query SearchUserCommentPollLikes(
    $filter: SearchableUserCommentPollLikeFilterInput
    $sort: [SearchableUserCommentPollLikeSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableUserCommentPollLikeAggregationInput]
  ) {
    searchUserCommentPollLikes(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
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
        commentID
        comment {
          id
          videoUri
          description
          userID
          createdAt
          postID
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchVotes = /* GraphQL */ `
  query SearchVotes(
    $filter: SearchableVoteFilterInput
    $sort: [SearchableVoteSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableVoteAggregationInput]
  ) {
    searchVotes(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
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
        optionID
        options {
          id
          text
          hashTagPollID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchComments = /* GraphQL */ `
  query SearchComments(
    $filter: SearchableCommentFilterInput
    $sort: [SearchableCommentSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableCommentAggregationInput]
  ) {
    searchComments(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchCommentQus = /* GraphQL */ `
  query SearchCommentQus(
    $filter: SearchableCommentQuFilterInput
    $sort: [SearchableCommentQuSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableCommentQuAggregationInput]
  ) {
    searchCommentQus(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchCommentPolls = /* GraphQL */ `
  query SearchCommentPolls(
    $filter: SearchableCommentPollFilterInput
    $sort: [SearchableCommentPollSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableCommentPollAggregationInput]
  ) {
    searchCommentPolls(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchCommentToComments = /* GraphQL */ `
  query SearchCommentToComments(
    $filter: SearchableCommentToCommentFilterInput
    $sort: [SearchableCommentToCommentSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableCommentToCommentAggregationInput]
  ) {
    searchCommentToComments(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchUserCommentToCommentLikes = /* GraphQL */ `
  query SearchUserCommentToCommentLikes(
    $filter: SearchableUserCommentToCommentLikeFilterInput
    $sort: [SearchableUserCommentToCommentLikeSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableUserCommentToCommentLikeAggregationInput]
  ) {
    searchUserCommentToCommentLikes(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
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
        commentID
        comment {
          id
          description
          userID
          createdAt
          updatedAt
          commentHasRepliesId
          commentQuHasRepliesId
          commentPollHasRepliesId
        }
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchHashTags = /* GraphQL */ `
  query SearchHashTags(
    $filter: SearchableHashTagFilterInput
    $sort: [SearchableHashTagSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableHashTagAggregationInput]
  ) {
    searchHashTags(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchHashTagQus = /* GraphQL */ `
  query SearchHashTagQus(
    $filter: SearchableHashTagQuFilterInput
    $sort: [SearchableHashTagQuSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableHashTagQuAggregationInput]
  ) {
    searchHashTagQus(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        nameHT
        posts {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchHashTagPolls = /* GraphQL */ `
  query SearchHashTagPolls(
    $filter: SearchableHashTagPollFilterInput
    $sort: [SearchableHashTagPollSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableHashTagPollAggregationInput]
  ) {
    searchHashTagPolls(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchOptions = /* GraphQL */ `
  query SearchOptions(
    $filter: SearchableOptionFilterInput
    $sort: [SearchableOptionSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableOptionAggregationInput]
  ) {
    searchOptions(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchSongs = /* GraphQL */ `
  query SearchSongs(
    $filter: SearchableSongFilterInput
    $sort: [SearchableSongSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableSongAggregationInput]
  ) {
    searchSongs(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        name
        imageUri
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUserPostLike = /* GraphQL */ `
  query GetUserPostLike($id: ID!) {
    getUserPostLike(id: $id) {
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
export const listUserPostLikes = /* GraphQL */ `
  query ListUserPostLikes(
    $filter: ModelUserPostLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPostLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserCommentLike = /* GraphQL */ `
  query GetUserCommentLike($id: ID!) {
    getUserCommentLike(id: $id) {
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
export const listUserCommentLikes = /* GraphQL */ `
  query ListUserCommentLikes(
    $filter: ModelUserCommentLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserCommentLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        commentID
        comment {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
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
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUserQuestionLike = /* GraphQL */ `
  query GetUserQuestionLike($id: ID!) {
    getUserQuestionLike(id: $id) {
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
export const listUserQuestionLikes = /* GraphQL */ `
  query ListUserQuestionLikes(
    $filter: ModelUserQuestionLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserQuestionLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserCommentQuLike = /* GraphQL */ `
  query GetUserCommentQuLike($id: ID!) {
    getUserCommentQuLike(id: $id) {
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
export const listUserCommentQuLikes = /* GraphQL */ `
  query ListUserCommentQuLikes(
    $filter: ModelUserCommentQuLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserCommentQuLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        commentID
        comment {
          id
          videoUri
          description
          userID
          createdAt
          postID
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPostToVote = /* GraphQL */ `
  query GetPostToVote($id: ID!) {
    getPostToVote(id: $id) {
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
export const listPostToVotes = /* GraphQL */ `
  query ListPostToVotes(
    $filter: ModelPostToVoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostToVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUserPostToVoteLike = /* GraphQL */ `
  query GetUserPostToVoteLike($id: ID!) {
    getUserPostToVoteLike(id: $id) {
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
export const listUserPostToVoteLikes = /* GraphQL */ `
  query ListUserPostToVoteLikes(
    $filter: ModelUserPostToVoteLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPostToVoteLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserCommentPollLike = /* GraphQL */ `
  query GetUserCommentPollLike($id: ID!) {
    getUserCommentPollLike(id: $id) {
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
export const listUserCommentPollLikes = /* GraphQL */ `
  query ListUserCommentPollLikes(
    $filter: ModelUserCommentPollLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserCommentPollLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        commentID
        comment {
          id
          videoUri
          description
          userID
          createdAt
          postID
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVote = /* GraphQL */ `
  query GetVote($id: ID!) {
    getVote(id: $id) {
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
export const listVotes = /* GraphQL */ `
  query ListVotes(
    $filter: ModelVoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
        optionID
        options {
          id
          text
          hashTagPollID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCommentQu = /* GraphQL */ `
  query GetCommentQu($id: ID!) {
    getCommentQu(id: $id) {
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
export const listCommentQus = /* GraphQL */ `
  query ListCommentQus(
    $filter: ModelCommentQuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentQus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCommentPoll = /* GraphQL */ `
  query GetCommentPoll($id: ID!) {
    getCommentPoll(id: $id) {
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
export const listCommentPolls = /* GraphQL */ `
  query ListCommentPolls(
    $filter: ModelCommentPollFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentPolls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCommentToComment = /* GraphQL */ `
  query GetCommentToComment($id: ID!) {
    getCommentToComment(id: $id) {
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
export const listCommentToComments = /* GraphQL */ `
  query ListCommentToComments(
    $filter: ModelCommentToCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentToComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getUserCommentToCommentLike = /* GraphQL */ `
  query GetUserCommentToCommentLike($id: ID!) {
    getUserCommentToCommentLike(id: $id) {
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
export const listUserCommentToCommentLikes = /* GraphQL */ `
  query ListUserCommentToCommentLikes(
    $filter: ModelUserCommentToCommentLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserCommentToCommentLikes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        commentID
        comment {
          id
          description
          userID
          createdAt
          updatedAt
          commentHasRepliesId
          commentQuHasRepliesId
          commentPollHasRepliesId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getHashTag = /* GraphQL */ `
  query GetHashTag($id: ID!) {
    getHashTag(id: $id) {
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
export const listHashTags = /* GraphQL */ `
  query ListHashTags(
    $filter: ModelHashTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHashTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getHashTagQu = /* GraphQL */ `
  query GetHashTagQu($id: ID!) {
    getHashTagQu(id: $id) {
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
export const listHashTagQus = /* GraphQL */ `
  query ListHashTagQus(
    $filter: ModelHashTagQuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHashTagQus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nameHT
        posts {
          id
          videoUri
          description
          userID
          songID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getHashTagPoll = /* GraphQL */ `
  query GetHashTagPoll($id: ID!) {
    getHashTagPoll(id: $id) {
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
export const listHashTagPolls = /* GraphQL */ `
  query ListHashTagPolls(
    $filter: ModelHashTagPollFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHashTagPolls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getOption = /* GraphQL */ `
  query GetOption($id: ID!) {
    getOption(id: $id) {
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
export const listOptions = /* GraphQL */ `
  query ListOptions(
    $filter: ModelOptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
      id
      name
      imageUri
      createdAt
      updatedAt
    }
  }
`;
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: ModelSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageUri
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
