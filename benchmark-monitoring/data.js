window.BENCHMARK_DATA = {
  "lastUpdate": 1732676211772,
  "repoUrl": "https://github.com/phoenixsqf/casbin",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "michael.todorovic@outlook.com",
            "name": "Michael Todorovic",
            "username": "michael-todorovic"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf330b3f9e4498561890da0ff854cf9e8bf6de5e",
          "message": "feat: fix typo in model error message (#1460)",
          "timestamp": "2024-11-16T18:04:38+08:00",
          "tree_id": "0d9def723b3b5f953dc4a06d7e90ab342954f7b3",
          "url": "https://github.com/phoenixsqf/casbin/commit/bf330b3f9e4498561890da0ff854cf9e8bf6de5e"
        },
        "date": 1732676211522,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCachedRaw",
            "value": 15.25,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "157263552 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - ns/op",
            "value": 15.25,
            "unit": "ns/op",
            "extra": "157263552 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "157263552 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "157263552 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel",
            "value": 179.2,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "13580803 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - ns/op",
            "value": 179.2,
            "unit": "ns/op",
            "extra": "13580803 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "13580803 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedBasicModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13580803 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel",
            "value": 176.3,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "12726297 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - ns/op",
            "value": 176.3,
            "unit": "ns/op",
            "extra": "12726297 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "12726297 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12726297 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall",
            "value": 195.2,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "12308258 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - ns/op",
            "value": 195.2,
            "unit": "ns/op",
            "extra": "12308258 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "12308258 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelSmall - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12308258 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium",
            "value": 196.6,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "11547448 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - ns/op",
            "value": 196.6,
            "unit": "ns/op",
            "extra": "11547448 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "11547448 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMedium - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "11547448 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge",
            "value": 163.3,
            "unit": "ns/op\t      96 B/op\t       3 allocs/op",
            "extra": "14624917 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - ns/op",
            "value": 163.3,
            "unit": "ns/op",
            "extra": "14624917 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - B/op",
            "value": 96,
            "unit": "B/op",
            "extra": "14624917 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelLarge - allocs/op",
            "value": 3,
            "unit": "allocs/op",
            "extra": "14624917 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles",
            "value": 177,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "13247962 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - ns/op",
            "value": 177,
            "unit": "ns/op",
            "extra": "13247962 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "13247962 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithResourceRoles - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13247962 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains",
            "value": 194,
            "unit": "ns/op\t     120 B/op\t       4 allocs/op",
            "extra": "12213692 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - ns/op",
            "value": 194,
            "unit": "ns/op",
            "extra": "12213692 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - B/op",
            "value": 120,
            "unit": "B/op",
            "extra": "12213692 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDomains - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12213692 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel",
            "value": 2781,
            "unit": "ns/op\t    1529 B/op\t      17 allocs/op",
            "extra": "842186 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - ns/op",
            "value": 2781,
            "unit": "ns/op",
            "extra": "842186 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - B/op",
            "value": 1529,
            "unit": "B/op",
            "extra": "842186 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedABACModel - allocs/op",
            "value": 17,
            "unit": "allocs/op",
            "extra": "842186 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel",
            "value": 201.2,
            "unit": "ns/op\t     152 B/op\t       4 allocs/op",
            "extra": "11664667 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - ns/op",
            "value": 201.2,
            "unit": "ns/op",
            "extra": "11664667 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "11664667 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedKeyMatchModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "11664667 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny",
            "value": 180.7,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "12620806 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - ns/op",
            "value": 180.7,
            "unit": "ns/op",
            "extra": "12620806 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "12620806 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelWithDeny - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12620806 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel",
            "value": 180.1,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "13359205 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - ns/op",
            "value": 180.1,
            "unit": "ns/op",
            "extra": "13359205 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "13359205 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedPriorityModel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13359205 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext",
            "value": 303.2,
            "unit": "ns/op\t     240 B/op\t       5 allocs/op",
            "extra": "7992940 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - ns/op",
            "value": 303.2,
            "unit": "ns/op",
            "extra": "7992940 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - B/op",
            "value": 240,
            "unit": "B/op",
            "extra": "7992940 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedWithEnforceContext - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "7992940 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel",
            "value": 172,
            "unit": "ns/op\t     104 B/op\t       4 allocs/op",
            "extra": "13623823 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - ns/op",
            "value": 172,
            "unit": "ns/op",
            "extra": "13623823 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - B/op",
            "value": 104,
            "unit": "B/op",
            "extra": "13623823 times\n4 procs"
          },
          {
            "name": "BenchmarkCachedRBACModelMediumParallel - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13623823 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall",
            "value": 553.4,
            "unit": "ns/op\t     150 B/op\t       6 allocs/op",
            "extra": "4607396 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - ns/op",
            "value": 553.4,
            "unit": "ns/op",
            "extra": "4607396 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - B/op",
            "value": 150,
            "unit": "B/op",
            "extra": "4607396 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "4607396 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium",
            "value": 537.5,
            "unit": "ns/op\t     157 B/op\t       6 allocs/op",
            "extra": "4493588 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - ns/op",
            "value": 537.5,
            "unit": "ns/op",
            "extra": "4493588 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - B/op",
            "value": 157,
            "unit": "B/op",
            "extra": "4493588 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyMedium - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "4493588 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge",
            "value": 565.7,
            "unit": "ns/op\t     165 B/op\t       7 allocs/op",
            "extra": "3988423 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - ns/op",
            "value": 565.7,
            "unit": "ns/op",
            "extra": "3988423 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - B/op",
            "value": 165,
            "unit": "B/op",
            "extra": "3988423 times\n4 procs"
          },
          {
            "name": "BenchmarkHasPolicyLarge - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "3988423 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall",
            "value": 547.9,
            "unit": "ns/op\t     152 B/op\t       6 allocs/op",
            "extra": "4577704 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - ns/op",
            "value": 547.9,
            "unit": "ns/op",
            "extra": "4577704 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - B/op",
            "value": 152,
            "unit": "B/op",
            "extra": "4577704 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicySmall - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "4577704 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium",
            "value": 633.7,
            "unit": "ns/op\t     166 B/op\t       7 allocs/op",
            "extra": "3615242 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - ns/op",
            "value": 633.7,
            "unit": "ns/op",
            "extra": "3615242 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "3615242 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "3615242 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge",
            "value": 1227,
            "unit": "ns/op\t     462 B/op\t       9 allocs/op",
            "extra": "1981903 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - ns/op",
            "value": 1227,
            "unit": "ns/op",
            "extra": "1981903 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - B/op",
            "value": 462,
            "unit": "B/op",
            "extra": "1981903 times\n4 procs"
          },
          {
            "name": "BenchmarkAddPolicyLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "1981903 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall",
            "value": 506.7,
            "unit": "ns/op\t     166 B/op\t       7 allocs/op",
            "extra": "4458637 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - ns/op",
            "value": 506.7,
            "unit": "ns/op",
            "extra": "4458637 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - B/op",
            "value": 166,
            "unit": "B/op",
            "extra": "4458637 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicySmall - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "4458637 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium",
            "value": 575.2,
            "unit": "ns/op\t     175 B/op\t       7 allocs/op",
            "extra": "4086265 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - ns/op",
            "value": 575.2,
            "unit": "ns/op",
            "extra": "4086265 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - B/op",
            "value": 175,
            "unit": "B/op",
            "extra": "4086265 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyMedium - allocs/op",
            "value": 7,
            "unit": "allocs/op",
            "extra": "4086265 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge",
            "value": 1415,
            "unit": "ns/op\t     283 B/op\t      12 allocs/op",
            "extra": "1829844 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - ns/op",
            "value": 1415,
            "unit": "ns/op",
            "extra": "1829844 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - B/op",
            "value": 283,
            "unit": "B/op",
            "extra": "1829844 times\n4 procs"
          },
          {
            "name": "BenchmarkRemovePolicyLarge - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1829844 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw",
            "value": 15.02,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "160149734 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - ns/op",
            "value": 15.02,
            "unit": "ns/op",
            "extra": "160149734 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - B/op",
            "value": 0,
            "unit": "B/op",
            "extra": "160149734 times\n4 procs"
          },
          {
            "name": "BenchmarkRaw - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "160149734 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel",
            "value": 3581,
            "unit": "ns/op\t    1494 B/op\t      16 allocs/op",
            "extra": "656947 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - ns/op",
            "value": 3581,
            "unit": "ns/op",
            "extra": "656947 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - B/op",
            "value": 1494,
            "unit": "B/op",
            "extra": "656947 times\n4 procs"
          },
          {
            "name": "BenchmarkBasicModel - allocs/op",
            "value": 16,
            "unit": "allocs/op",
            "extra": "656947 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel",
            "value": 5355,
            "unit": "ns/op\t    2056 B/op\t      34 allocs/op",
            "extra": "445046 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - ns/op",
            "value": 5355,
            "unit": "ns/op",
            "extra": "445046 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - B/op",
            "value": 2056,
            "unit": "B/op",
            "extra": "445046 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModel - allocs/op",
            "value": 34,
            "unit": "allocs/op",
            "extra": "445046 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small",
            "value": 50495,
            "unit": "ns/op\t   20269 B/op\t     479 allocs/op",
            "extra": "47365 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - ns/op",
            "value": 50495,
            "unit": "ns/op",
            "extra": "47365 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - B/op",
            "value": 20269,
            "unit": "B/op",
            "extra": "47365 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/small - allocs/op",
            "value": 479,
            "unit": "allocs/op",
            "extra": "47365 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium",
            "value": 533171,
            "unit": "ns/op\t  191777 B/op\t    4827 allocs/op",
            "extra": "4501 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - ns/op",
            "value": 533171,
            "unit": "ns/op",
            "extra": "4501 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - B/op",
            "value": 191777,
            "unit": "B/op",
            "extra": "4501 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/medium - allocs/op",
            "value": 4827,
            "unit": "allocs/op",
            "extra": "4501 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large",
            "value": 5507832,
            "unit": "ns/op\t 1898956 B/op\t   48145 allocs/op",
            "extra": "440 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - ns/op",
            "value": 5507832,
            "unit": "ns/op",
            "extra": "440 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - B/op",
            "value": 1898956,
            "unit": "B/op",
            "extra": "440 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSizes/large - allocs/op",
            "value": 48145,
            "unit": "allocs/op",
            "extra": "440 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall",
            "value": 61432,
            "unit": "ns/op\t   20433 B/op\t     614 allocs/op",
            "extra": "39076 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - ns/op",
            "value": 61432,
            "unit": "ns/op",
            "extra": "39076 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - B/op",
            "value": 20433,
            "unit": "B/op",
            "extra": "39076 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelSmall - allocs/op",
            "value": 614,
            "unit": "allocs/op",
            "extra": "39076 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium",
            "value": 605860,
            "unit": "ns/op\t  194665 B/op\t    6015 allocs/op",
            "extra": "3765 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - ns/op",
            "value": 605860,
            "unit": "ns/op",
            "extra": "3765 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - B/op",
            "value": 194665,
            "unit": "B/op",
            "extra": "3765 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelMedium - allocs/op",
            "value": 6015,
            "unit": "allocs/op",
            "extra": "3765 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge",
            "value": 6076639,
            "unit": "ns/op\t 1930509 B/op\t   60121 allocs/op",
            "extra": "378 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - ns/op",
            "value": 6076639,
            "unit": "ns/op",
            "extra": "378 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - B/op",
            "value": 1930509,
            "unit": "B/op",
            "extra": "378 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelLarge - allocs/op",
            "value": 60121,
            "unit": "allocs/op",
            "extra": "378 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles",
            "value": 4429,
            "unit": "ns/op\t    1833 B/op\t      26 allocs/op",
            "extra": "497157 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - ns/op",
            "value": 4429,
            "unit": "ns/op",
            "extra": "497157 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - B/op",
            "value": 1833,
            "unit": "B/op",
            "extra": "497157 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithResourceRoles - allocs/op",
            "value": 26,
            "unit": "allocs/op",
            "extra": "497157 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains",
            "value": 5009,
            "unit": "ns/op\t    1814 B/op\t      24 allocs/op",
            "extra": "478789 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - ns/op",
            "value": 5009,
            "unit": "ns/op",
            "extra": "478789 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - B/op",
            "value": 1814,
            "unit": "B/op",
            "extra": "478789 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomains - allocs/op",
            "value": 24,
            "unit": "allocs/op",
            "extra": "478789 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel",
            "value": 2799,
            "unit": "ns/op\t    1521 B/op\t      16 allocs/op",
            "extra": "809652 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - ns/op",
            "value": 2799,
            "unit": "ns/op",
            "extra": "809652 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - B/op",
            "value": 1521,
            "unit": "B/op",
            "extra": "809652 times\n4 procs"
          },
          {
            "name": "BenchmarkABACModel - allocs/op",
            "value": 16,
            "unit": "allocs/op",
            "extra": "809652 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel",
            "value": 4105673,
            "unit": "ns/op\t 1335054 B/op\t   40092 allocs/op",
            "extra": "580 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - ns/op",
            "value": 4105673,
            "unit": "ns/op",
            "extra": "580 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - B/op",
            "value": 1335054,
            "unit": "B/op",
            "extra": "580 times\n4 procs"
          },
          {
            "name": "BenchmarkABACRuleModel - allocs/op",
            "value": 40092,
            "unit": "allocs/op",
            "extra": "580 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel",
            "value": 6025,
            "unit": "ns/op\t    3058 B/op\t      36 allocs/op",
            "extra": "390856 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - ns/op",
            "value": 6025,
            "unit": "ns/op",
            "extra": "390856 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - B/op",
            "value": 3058,
            "unit": "B/op",
            "extra": "390856 times\n4 procs"
          },
          {
            "name": "BenchmarkKeyMatchModel - allocs/op",
            "value": 36,
            "unit": "allocs/op",
            "extra": "390856 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny",
            "value": 6858,
            "unit": "ns/op\t    2469 B/op\t      48 allocs/op",
            "extra": "346023 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - ns/op",
            "value": 6858,
            "unit": "ns/op",
            "extra": "346023 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - B/op",
            "value": 2469,
            "unit": "B/op",
            "extra": "346023 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDeny - allocs/op",
            "value": 48,
            "unit": "allocs/op",
            "extra": "346023 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel",
            "value": 4101,
            "unit": "ns/op\t    1749 B/op\t      21 allocs/op",
            "extra": "578683 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - ns/op",
            "value": 4101,
            "unit": "ns/op",
            "extra": "578683 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - B/op",
            "value": 1749,
            "unit": "B/op",
            "extra": "578683 times\n4 procs"
          },
          {
            "name": "BenchmarkPriorityModel - allocs/op",
            "value": 21,
            "unit": "allocs/op",
            "extra": "578683 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge",
            "value": 13594,
            "unit": "ns/op\t    8883 B/op\t      71 allocs/op",
            "extra": "174151 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - ns/op",
            "value": 13594,
            "unit": "ns/op",
            "extra": "174151 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - B/op",
            "value": 8883,
            "unit": "B/op",
            "extra": "174151 times\n4 procs"
          },
          {
            "name": "BenchmarkRBACModelWithDomainPatternLarge - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "174151 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall",
            "value": 47694,
            "unit": "ns/op\t     800 B/op\t     100 allocs/op",
            "extra": "48514 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - ns/op",
            "value": 47694,
            "unit": "ns/op",
            "extra": "48514 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - B/op",
            "value": 800,
            "unit": "B/op",
            "extra": "48514 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerSmall - allocs/op",
            "value": 100,
            "unit": "allocs/op",
            "extra": "48514 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium",
            "value": 503230,
            "unit": "ns/op\t   13953 B/op\t    1744 allocs/op",
            "extra": "4801 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - ns/op",
            "value": 503230,
            "unit": "ns/op",
            "extra": "4801 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - B/op",
            "value": 13953,
            "unit": "B/op",
            "extra": "4801 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerMedium - allocs/op",
            "value": 1744,
            "unit": "allocs/op",
            "extra": "4801 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge",
            "value": 5803294,
            "unit": "ns/op\t  229957 B/op\t   19744 allocs/op",
            "extra": "364 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - ns/op",
            "value": 5803294,
            "unit": "ns/op",
            "extra": "364 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - B/op",
            "value": 229957,
            "unit": "B/op",
            "extra": "364 times\n4 procs"
          },
          {
            "name": "BenchmarkRoleManagerLarge - allocs/op",
            "value": 19744,
            "unit": "allocs/op",
            "extra": "364 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge",
            "value": 341476983,
            "unit": "ns/op\t88479860 B/op\t 3596894 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - ns/op",
            "value": 341476983,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - B/op",
            "value": 88479860,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternLarge - allocs/op",
            "value": 3596894,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge",
            "value": 12012951,
            "unit": "ns/op\t 4384298 B/op\t  142323 allocs/op",
            "extra": "201 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - ns/op",
            "value": 12012951,
            "unit": "ns/op",
            "extra": "201 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - B/op",
            "value": 4384298,
            "unit": "B/op",
            "extra": "201 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithDomainPatternLarge - allocs/op",
            "value": 142323,
            "unit": "allocs/op",
            "extra": "201 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge",
            "value": 347315878,
            "unit": "ns/op\t90322226 B/op\t 3673464 allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - ns/op",
            "value": 347315878,
            "unit": "ns/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - B/op",
            "value": 90322226,
            "unit": "B/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkBuildRoleLinksWithPatternAndDomainPatternLarge - allocs/op",
            "value": 3673464,
            "unit": "allocs/op",
            "extra": "6 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge",
            "value": 1054,
            "unit": "ns/op\t     112 B/op\t       9 allocs/op",
            "extra": "2289142 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - ns/op",
            "value": 1054,
            "unit": "ns/op",
            "extra": "2289142 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2289142 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2289142 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge",
            "value": 382.5,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "6267154 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - ns/op",
            "value": 382.5,
            "unit": "ns/op",
            "extra": "6267154 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "6267154 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithDomainPatternLarge - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "6267154 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge",
            "value": 1061,
            "unit": "ns/op\t     112 B/op\t       9 allocs/op",
            "extra": "2292334 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - ns/op",
            "value": 1061,
            "unit": "ns/op",
            "extra": "2292334 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - B/op",
            "value": 112,
            "unit": "B/op",
            "extra": "2292334 times\n4 procs"
          },
          {
            "name": "BenchmarkHasLinkWithPatternAndDomainPatternLarge - allocs/op",
            "value": 9,
            "unit": "allocs/op",
            "extra": "2292334 times\n4 procs"
          }
        ]
      }
    ]
  }
}