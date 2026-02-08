---
title: Parsing YAML in Go
date: 2020-12-19
tags: [Go, YAML]
---

## gopkg.in/yaml.v2

Assuming `config.yaml` is in the same directory as your entry file.

```yaml
TodoLists:
  - Test 1
  - Test 2
  - Test 3

CloudKey: adasdx7817238123213
```

Here's how to parse it into a struct:

```go
package main

import (
    "fmt"
    "io/ioutil"
    "gopkg.in/yaml.v2"
)

// Define the structure to match the YAML
type TodoLists struct {
    // Use tags to map YAML keys to struct fields
    Lists []string `yaml:"TodoLists"`
    CloudKey string `yaml:"CloudKey"`
}

func main(){
    // Initialize the struct
    todolists := TodoLists{}
    filePath := "./config.yaml"

    buffer, err := ioutil.ReadFile(filePath)

    if err != nil {
        panic(err)
    }

    // Unmarshal the YAML data into the struct
    err = yaml.Unmarshal(buffer, &todolists)
    if err != nil {
        panic(err)
    }

    // Iterate and print the list
    for _, value := range todolists.Lists {
        fmt.Println(value)
    }
}

// Output:
// Test 1
// Test 2
// Test 3
```
