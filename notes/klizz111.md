---
timezone: UTC+8
---

# klizz

**GitHub ID:** klizz111

**Telegram:** 

## Self-introduction

AI x Web3 School

## Notes

<!-- Content_START -->
# 2026-05-19
<!-- DAILY_CHECKIN_2026-05-19_START -->
# Langchain 实现 HyDE

```python
from langchain.llms import OpenAI
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.prompts import PromptTemplate

llm = OpenAI(temperature=0)
embeddings = OpenAIEmbeddings()

# 创建 HyDE 提示
hyde_prompt = PromptTemplate(
    input_variables=["question"],
    template="Please write a passage that answers the following question:\n\nQuestion: {question}\n\nPassage:"
)

# 创建文档库
docs = ["Document 1 content", "Document 2 content", "Document 3 content"]
vectorstore = FAISS.from_texts(docs, embeddings)

def hyde_retriever(query, k=3):
    # 生成假设文档
    hypothetical_doc = llm(hyde_prompt.format(question=query))
    
    # 嵌入假设文档
    hyde_embedding = embeddings.embed_query(hypothetical_doc)
    
    # 使用假设文档嵌入检索相似文档
    similar_docs = vectorstore.similarity_search_by_vector(hyde_embedding, k=k)
    
    return similar_docs

# 使用 HyDE 检索器
results = hyde_retriever("What is the meaning of life?")
print(results)
```
<!-- DAILY_CHECKIN_2026-05-19_END -->

# 2026-05-18
<!-- DAILY_CHECKIN_2026-05-18_START -->

# Langchain 与 Pydantic 集成

```python
from pydantic import BaseModel, Field
from typing import List
from langchain.output_parsers import PydanticOutputParser
from langchain.prompts import PromptTemplate
from langchain.llms import OpenAI

class Author(BaseModel):
    name: str = Field(description="Name of the author")
    birth_year: int = Field(description="Year the author was born")

class Book(BaseModel):
    title: str = Field(description="Title of the book")
    author: Author = Field(description="Author of the book")
    publication_year: int = Field(description="Year the book was published")

class Library(BaseModel):
    name: str = Field(description="Name of the library")
    books: List[Book] = Field(description="List of books in the library")

parser = PydanticOutputParser(pydantic_object=Library)

prompt = PromptTemplate(
    template="Provide information about a library and its books.\n{format_instructions}\n{query}",
    input_variables=["query"],
    partial_variables={"format_instructions": parser.get_format_instructions()}
)

llm = OpenAI(temperature=0)

_input = prompt.format_prompt(query="Describe a small library with 2 books")
output = llm(_input.to_string())
result = parser.parse(output)

print(result)
```
<!-- DAILY_CHECKIN_2026-05-18_END -->
<!-- Content_END -->
