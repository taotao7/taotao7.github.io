---
title: "go yaml解析"
date: 2020-12-19
---

## gopkg.in/yaml.v2

文件 config.yaml 和程序入口文件在同一个目录

```yaml
TodoLists:
  - 测试1
  - 测试2
  - 测试3

CloudKey: adasdx7817238123213
```

```go
package main
//导入yaml解析的包
import (
    "fmt"
    "io/ioutil"
    "gopkg.in/yaml.v2"
)

//构造结构体
type TodoLists struct {
    //如果是数组型的类似于上面yaml文件里的todolists结构需要用数组来装
    Lists []string `yaml:"TodoLists"`
    CloudKey string `yaml:"CloudKey"`
}

func main(){
    //定义结构体
    todolists:=TodoLists{}
    filePath:="./config.yaml"
    buffer,err := ioutil.ReadFile(filePath)

    //没有读取到文件
    if err!=nil{
        panic(err)
    }
    //使用yaml.v2包的Unmarshal函数解析
    yaml.Unmarshal(buffer,&todolists)

    //循环打印出config.yaml的TodoLists字段
    for _,value := range todolists.Lists{
        fmt.Println(value)
    }

}

//输出结果为：
//测试1
//测试2
//测试3
```
