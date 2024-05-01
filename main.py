#Pasos para usar pandas por primera vez
#1.Importar pandas

import pandas as pd

#2.traer los datos
tablaEncicla = pd.read_csv("./data/EstacionesEnCicla_DatosAbiertos2_1.csv")
print(tablaEncicla)

tablaSiembras = pd.read_csv("./data/PlanSiembra_dic2019.csv")
print(tablaSiembras.describe())