---
{"dg-publish":true,"dg-permalink":"/leetcode/滑动窗口/半径为k的子数组平均值","tags":["滑动窗口"],"permalink":"/leetcode/滑动窗口/半径为k的子数组平均值/","dgPassFrontmatter":true,"noteIcon":"","created":"2025-03-25T15:10:44.076+08:00","updated":"2025-03-27T10:29:01.326+08:00"}
---



```cpp
class Solution {
public:
    vector<int> getAverages(vector<int>& nums, int k) {
        int n = nums.size();
        vector<int> ans(n, -1);
        if (k * 2 + 1 <= n) {
            long long sum = accumulate(nums.begin(), nums.begin() + k * 2 + 1, 0LL);
            for (int i = k; i + k < n; ++i) {
                if (i != k) {
                    sum += nums[i + k] - nums[i - k - 1];
                }
                ans[i] = sum / (k * 2 + 1);
            }
        }
        return ans;
    }
};
```

`ans(n,-1)`这是初始化长度为n的哈希表全部为-1
半径为k子数组的长度是`k*2+1`
`long long sum = accumulate(nums.begin(), nums.begin() + k * 2 + 1, 0LL);
