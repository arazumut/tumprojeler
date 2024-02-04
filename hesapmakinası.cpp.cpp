#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main() {
    int secim;
    int sayi1, sayi2;

    printf("\n toplama icin '1' e basınız\n cikarma icin '2' ye basınız\n carpma icin '3' e basınız\n bolme icin '4' e basınız\n Hangi işlemi yapmak istediğinizi seçiniz: ");
    scanf("%d", &secim);

    if (secim >= 1 && secim <= 4) {
        printf(" sayi1: ");
        scanf("%d", &sayi1);
        printf(" sayi2: ");
        scanf("%d", &sayi2);

        // By Kamil Umut Araz

        if (secim == 1) {
            printf(" islem sonucunuz : %d", sayi1 + sayi2);
        }
        else if (secim == 2) {
            printf(" islem sonucunuz : %d", sayi1 - sayi2);
        }
        else if (secim == 3) {
            printf(" islem sonucunuz : %d", sayi1 * sayi2);
        }
        else if (secim == 4) {
            if (sayi2 != 0) {
                printf(" islem sonucunuz : %d", sayi1 / sayi2);
            }
            else {
                printf("Sifira bolunemez!\n");
            }
        }
    }
    else {
        printf(" seciminiz gerceklestirilemiyor.");
    }

    return 0;
}