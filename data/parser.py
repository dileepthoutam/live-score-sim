#! /usr/bin/env python3

import pandas as pd

df = pd.read_csv('ipl-2024-final.csv')

for x in df.iloc[0]:
    print(x)

