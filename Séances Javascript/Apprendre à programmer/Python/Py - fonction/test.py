a = 42
def modifier(nombre):
    a = nombre
    print(a)
    
modifier(10)
print(a)


puissance = lambda a, b=3: a**b
print(puissance(2,4)) # Affiche 8

def test(f, a, b=None):
    if b != None:
        r = f(a, b)
    else:
        r = f(a)
    if r:
        print("Test passé avec succès :)")
    else:
        print("Echec du test :(")
pair = lambda a: a % 2 == 0
divise = lambda a, b: a % b == 0

test(pair, 6)
test(divise, 7, 3)