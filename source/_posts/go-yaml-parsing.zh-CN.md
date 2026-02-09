---
title: Go 语言解析 YAML
date: 2020-12-19
tags: [Go, YAML]
slug: go-yaml-parsing
permalink: 2020/12/19/go-yaml-parsing/
---

## gopkg.in/yaml.v2

假设 `config.yaml` 与入口文件在同一目录下。

```yaml
TodoLists:
  - Test 1
  - Test 2
  - Test 3

CloudKey: adasdx7817238123213
```

以下是将其解析为结构体的方法：

```go
package main

import (
    "fmt"
    "io/ioutil"
    "gopkg.in/yaml.v2"
)

// 定义与 YAML 匹配的结构体
type TodoLists struct {
    // 使用 tags 映射 YAML 键到结构体字段
    Lists []string `yaml:"TodoLists"`
    CloudKey string `yaml:"CloudKey"`
}

func main(){
    // 初始化结构体
    todolists := TodoLists{}
    filePath := "./config.yaml"

    buffer, err := ioutil.ReadFile(filePath)

    if err != nil {
        panic(err)
    }

    // 将 YAML 数据反序列化到结构体中
    err = yaml.Unmarshal(buffer, &todolists)
    if err != nil {
        panic(err)
    }

    // 遍历并打印列表
    for _, value := range todolists.Lists {
        fmt.Println(value)
    }
}

// Output:
// Test 1
// Test 2
// Test 3
```
