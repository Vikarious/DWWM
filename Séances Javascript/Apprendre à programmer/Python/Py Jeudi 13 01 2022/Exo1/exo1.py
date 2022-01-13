# Ecrire un programme qui demande à l’utilisateur 3 nombres entiers positifs et plus petits que 40000, puis effectue la moyenne de ces trois nombres et affiche la valeur de cette moyenne.

# Le code n'effectuera pas de vérification concernant l'intervalle de 0 à 40000.



userInt1 = int(input("Entrez 1er un entier positif Max 40000 SVP: "))
userInt2 = int(input("Entrez 2eme un entier positif Max 40000 SVP: "))
userInt3 = int(input("Entrez 3eme un entier positif Max 40000 SVP: "))

number_list = [userInt1, userInt2, userInt3]

def valid (int):
    if int < 0:
        print("Erreur: votre nombre n'est pas positif.")
    elif int >= 40000:
        print("Erreur: votre nombre est trop grand (Max = 40000)")


def cal_average(num):
    sum_num = 0
    for t in num:
        sum_num = sum_num + t           

    avg = sum_num / len(num)
    return avg


valid(userInt1)
valid(userInt2)
valid(userInt3)

print("La moyenne est de: " + str(cal_average(number_list)))