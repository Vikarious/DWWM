# commun.py
# N'oubliez pas l'encodage
def xor(a, b):
    return (a and not(b)) or (b and not(a))