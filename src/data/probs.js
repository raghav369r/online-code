export const pdata = [
  {
    description:
      "Given an array of integersnums and an integertarget, return indices of the two numbers such that they add up totarget.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.",
    examples: [
      {
        Input: "nums = [2,7,11,15], target = 9",
        Output: "[0,1]",
        Explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      { Input: "nums = [3,2,4], target = 6", Output: "[1,2]" },
      { Input: "nums = [3,3], target = 6", Output: "[0,1]" },
    ],
    Constraints: [
      "2 <= nums.length <= 103",
      "-109 <= nums[i] <= 109",
      "-109 <= target <= 109",
      "Only one valid answer exists.",
    ],
  },
  {
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    examples: [
      {
        Input: "nums = [2,7,11,15], target = 9",
        Output: "[0,1]",
        Explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        Input: "nums = [3,2,4], target = 6",
        Output: "[1,2]",
      },
      {
        Input: "nums = [3,3], target = 6",
        Output: "[0,1]",
      },
    ],
    Constraints: [
      "2 <= nums.length <= 103",
      "-109 <= nums[i] <= 109",
      "-109 <= target <= 109",
      "Only one valid answer exists.",
    ],
  },
  {
    description:
      "Given a string s, find the length of the longest substring without repeating characters.",
    examples: [
      {
        Input: 's = "abcabcbb"',
        Output: "3",
        Explanation: 'The answer is "abc", with the length of 3.',
      },
      {
        Input: 's = "bbbbb"',
        Output: "1",
        Explanation: 'The answer is "b", with the length of 1.',
      },
      {
        Input: 's = "pwwkew"',
        Output: "3",
        Explanation:
          'The answer is "wke", with the length of 3. Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.',
      },
      {
        Input: 's = ""',
        Output: "0",
      },
    ],
    Constraints: [
      "0 <= s.length <= 5 * 104",
      "s consists of English letters, digits, symbols and spaces.",
    ],
  },
  {
    description:
      'A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.',
    methods: [
      {
        name: "Trie()",
        description: "Initializes the trie object.",
      },
      {
        name: "void insert(String word)",
        description: "Inserts the string word into the trie.",
      },
      {
        name: "boolean search(String word)",
        description:
          "Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.",
      },
      {
        name: "boolean startsWith(String prefix)",
        description:
          "Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.",
      },
    ],
    example: {
      Input:
        '["Trie", "insert", "search", "search", "startsWith", "insert", "search"]',
      Output: "[null, null, true, false, true, null, true]",
      Explanation:
        'Trie trie = new Trie(); trie.insert("apple"); trie.search("apple");   // return True trie.search("app");     // return False trie.startsWith("app"); // return True trie.insert("app"); trie.search("app");     // return True',
    },
    Constraints: [
      "1 <= word.length, prefix.length <= 2000",
      "word and prefix consist only of lowercase English letters.",
      "At most 3 * 104 calls in total will be made to insert, search, and startsWith.",
    ],
  },
];

export const pndata = [
  {
    problem_name: "Two Sum",
    description:
      "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
    input: '{"nums": "[2, 7, 11, 15]", "target": "9"}',
    expected_output: "[0, 1]",
    constraints:
      "Each input would have exactly one solution, and you may not use the same element twice.",
  },
  {
    problem_name: "Add Two Numbers",
    description:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    input: '{"l1": "[2, 4, 3]", "l2": "[5, 6, 4]"}',
    expected_output: "[7, 0, 8]",
    constraints:
      "The digits are stored in reverse order and each of their nodes contains a single digit.",
  },
  {
    problem_name: "Longest Substring Without Repeating Characters",
    description:
      "Given a string, find the length of the longest substring without repeating characters.",
    input: '{"s": "abcabcbb"}',
    expected_output: "3",
    constraints: "The input string only contains lowercase English letters.",
  },
  {
    problem_name: "Median of Two Sorted Arrays",
    description:
      "There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays.",
    input: '{"nums1": "[1, 3]", "nums2": "[2]"}',
    expected_output: "2.0",
    constraints: "The overall run time complexity should be O(log (m+n)).",
  },
  {
    problem_name: "Container With Most Water",
    description:
      "Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.",
    input: '{"height": "[1, 8, 6, 2, 5, 4, 8, 3, 7]"}',
    expected_output: "49",
    constraints: "You may not slant the container and n is at least 2.",
  },
  {
    problem_name: "Longest Palindromic Substring",
    description:
      "Given a string s, find the longest palindromic substring in s.",
    input: '{"s": "babad"}',
    expected_output: '"bab" or "aba"',
    constraints: "The input string's length is at most 1000.",
  },
  {
    problem_name: "Reverse Integer",
    description: "Given a 32-bit signed integer, reverse digits of an integer.",
    input: '{"x": "123"}',
    expected_output: "321",
    constraints:
      "Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [-2^31,  2^31 - 1].",
  },
  {
    problem_name: "String to Integer (atoi)",
    description:
      "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).",
    input: '{"s": "   -42"}',
    expected_output: "-42",
    constraints:
      "Only the space character ' ' is considered a whitespace character.",
  },
  {
    problem_name: "Palindrome Number",
    description:
      "Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.",
    input: '{"x": "121"}',
    expected_output: "true",
    constraints:
      "Could you solve it without converting the integer to a string?",
  },
  {
    problem_name: "Regular Expression Matching",
    description:
      "Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*' where: '.' Matches any single character. '*' Matches zero or more of the preceding element.",
    input: '{"s": "aa", "p": "a*"}',
    expected_output: "true",
    constraints:
      "The input string consists of only lowercase English letters, and the pattern consists of only lowercase English letters, '.', and '*'.",
  },
  {
    problem_name: "Merge Two Sorted Lists",
    description:
      "Merge two sorted linked lists and return it as a sorted list.",
    input: '{"l1": "[1, 2, 4]", "l2": "[1, 3, 4]"}',
    expected_output: "[1, 1, 2, 3, 4, 4]",
    constraints: "The number of nodes in both lists is in the range [0, 50].",
  },
  {
    problem_name: "3Sum",
    description:
      "Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.",
    input: '{"nums": "[-1, 0, 1, 2, -1, -4]"}',
    expected_output: "[[-1, -1, 2], [-1, 0, 1]]",
    constraints: "The solution set must not contain duplicate triplets.",
  },
  {
    problem_name: "Letter Combinations of a Phone Number",
    description:
      "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.",
    input: '{"digits": "23"}',
    expected_output: '["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]',
    constraints: "0 <= digits.length <= 4",
  },
  {
    problem_name: "Remove Nth Node From End of List",
    description:
      "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
    input: '{"head": "[1, 2, 3, 4, 5]", "n": "2"}',
    expected_output: "[1, 2, 3, 5]",
    constraints: "The number of nodes in the list is sz.",
  },
];
