# Day 10 - SHAP Model Explainability

**Date:** 2026-06-02

Applied SHAP (SHapley Additive exPlanations) values to explain predictions from a gradient boosting model.

## Key Takeaways
- Generated SHAP waterfall and beeswarm plots to interpret feature importance
- - Used TreeExplainer for fast SHAP value computation on XGBoost models
  - - Identified top contributing features and their direction of impact on predictions
