a = 42
def affichage():
    print(a)

affichage()

def change(valeur):
    global a
    a = valeur

print(a)
change(10)
print(a)
