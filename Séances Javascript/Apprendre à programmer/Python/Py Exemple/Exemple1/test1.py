a = 4

print("a =", a)

b = 3

print("b =", b)

# # afficher le resultat des varables a et b
# print(a + b)

# a = b + 1
# print(a)

# a += b  #equivalent à a = a + b
# print(a)

c = a // b
d = a % b
print('La divison de ' + str(a) + ' par ' + str(b) + ' est egale a ' + str(c) + '. Il reste ' + str(d))

chaine = "Et voila du texte"
chaine1 = ' Nous l\'avons'
chaine3 = ' \"reparee\"'
print(chaine + chaine1 + chaine3)

# reponse = input() # Une ligne vide apparait et attends un input de l'utilisateur
def age():
    age = int(input("Quel est votre age?"))
    print('Vous avez ' + str(age) + ' ans')

    if age >= 16 and age < 100 :
        print('Vous avez plus de 16 ans')
    elif age > 100 :
        print('Tu te moquerais pas de moi?')
    else :
        print('Vous avez moins de 16 ans')


# print(type(age))

a = 3
print(type(a))
b = 8.2
print(type(b))
chaine = 'Au revoir'
print(type(chaine))
vrai = True
print(type(vrai))

print(7 > 5 > 1)
print(7 > 5 < 9 != 10)

n = 0
while n <  10 :
    n += 1
    if n % 2 != 0 :
        print(str(n) + ' est impaire')
    else :
        print(str(n) + ' est paire')
    
