import pandas as pd
import numpy as np

def limpar_dados(tabela):

    tabela = tabela.dropna(how="all")

    tabela = tabela.replace([np.inf, -np.inf], np.nan)
    tabela = tabela.fillna(0)

    colunas_inuteis = []

    for coluna in tabela.columns:

        nome = coluna.lower().strip()

        valores_unicos = tabela[coluna].nunique()

        total_linhas = len(tabela)

        averiguando_id = nome.endswith("id")

        muitos_unicos = valores_unicos >= total_linhas * 0.9

        if averiguando_id and muitos_unicos:
            colunas_inuteis.append(coluna)

    tabela = tabela.drop(columns=colunas_inuteis)

    return tabela

def imshow(tabela):
    if tabela.select_dtypes(include="number").empty:
        return None
    corr = tabela.corr(numeric_only=True)
    corr = corr.where(corr < 1)
    corr = corr.fillna(0)

    return{
        "z": corr.values.tolist(),
        "labels": corr.columns.tolist()
    }

def histogram(tabela):
    if tabela.select_dtypes(include="number").empty:
        return []
    variancia = tabela.var(numeric_only=True).sort_values(ascending=False)
    top_colunas = variancia.head(3).index

    graficos = []

    for col in top_colunas:
        graficos.append({"x": tabela[col].tolist(), "coluna": col})

    return graficos
    
def scatter(tabela):
    if tabela.select_dtypes(include="number").empty:
        return []
    colunas = tabela.columns
    contador = 0
    limite = 3
    graficos = []

    for i in range(len(colunas)):
        for j in range(i+1, len(colunas)):
            col1 = colunas[i]
            col2 = colunas[j]

            if pd.api.types.is_numeric_dtype(tabela[col1]) and pd.api.types.is_numeric_dtype(tabela[col2]):
                correlacao = tabela[col1].corr(tabela[col2])

                if abs(correlacao) >= 0.7:
                    graficos.append({ "x": tabela[col1].tolist(), "y": tabela[col2].tolist(), "col1": col1, "col2": col2})
            
                    contador += 1

                    if contador >= limite:
                        break
                
                if contador >= limite:
                    break
    
    return graficos

