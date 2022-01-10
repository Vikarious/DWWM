def affiche_menu() :
    print("Menu: ")
    print("* Action 1")
    print("* Action 2")

affiche_menu()

def dire(text) :
    print("# " + text)

dire("Bonjour")
dire("Aurevoir")
dire("A demain")

def addition(a , b) :
    result = a + b
    return result

somme = addition(5 , 5)
print(somme)

def saluer(name = "visiteur") :
    print("Salut " + str(name))

saluer("Patrick")
saluer()