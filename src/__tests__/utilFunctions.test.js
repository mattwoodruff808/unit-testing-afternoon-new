import {shortenText} from '../utils/functions';
import {wordCount, attachUserName} from '../../server/utils';
import {shortText, longText, posts, users} from './__data__/testData';

test('shortenText should not change strings with less than 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29);
});

test('shortenText should cut off characters over 100, and add three periods at the end', () => {
    const shortened = shortenText(longText);

    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe('...');
});

test('wordCount should correctly count the number of words', () => {
    expect(wordCount(posts)).toBe(233);
});

test('attachUserName attaches a users full name to the post', () => {
    const newPosts = attachUserName(users, posts);
    expect(newPosts[0]).toHaveProperty('displayName');
  });

test('attachUserName removes posts with no matching user', () => {
  const newPosts = attachUserName(users, posts);
  const deletedPost = posts[5];
  expect(newPosts).not.toContainEqual(deletedPost);
});