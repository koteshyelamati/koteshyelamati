# Day 11 - LangChain RAG Pipeline

**Date:** 2026-06-02

Built a Retrieval-Augmented Generation pipeline using LangChain and FAISS for document question answering.

## Key Takeaways
- Indexed documents with FAISS vector store using OpenAI embeddings for semantic search
- - Constructed RAG chain with LangChain's RetrievalQA using GPT-4 as the language model
  - - Improved answer accuracy by tuning chunk size and retrieval top-k parameters
