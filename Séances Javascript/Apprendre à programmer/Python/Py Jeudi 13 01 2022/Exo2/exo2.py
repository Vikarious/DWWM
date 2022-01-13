# Ecrire un programme qui demande à l'utilisateur de saisir un nombre entier et qui indique selon le cas :

# Ce nombre est positif ou nul

# Ce nombre est négatif



userInt = int(input("Entrez un nombre svp: "))

if userInt > 0:
    print("Votre nombre est positif.")
elif userInt == 0:
    print("Votre nombre est nul")
else:
    print("Votre nombre est negatif")