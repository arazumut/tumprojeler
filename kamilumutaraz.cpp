
//

#include <iostream>
using namespace std;
int main()
{

    //int dizi[5] = { 5,6,4,9 };
    //cout << dizi;
    int dizi[2][3] = { {-8,4,5},{0,8,9} };
    int dizi2[2][3] = { -8,4,5,0,8,9, };

    for (int i = 0; i < 2; i++)
        for (int j = 0; j < 2; j++)
            cout << dizi[i][j] << " ";


    int k;
    for (k = 0; k < 10; k++);
    cout << k << endl;


    // 1 ile 21 arasındaki çift sayıları aralarında , olacak şekilde yazan program
    
    for (int s = 2; s < 21; s += 2) {
        cout << s << ",";
    }

    // 1 ile 21 arasındaki tek sayıları aralarında , olacak şekkilde yazan program
    cout << endl;

    for (int t = 1; t < 21; t += 2) {
        cout << t << ",";
    }

    // ekrana alt alta 5 defa merhaba yazdıran program
    cout << endl;

    int m = 0;
    while (m < 5) {
        cout << "merhaba" << endl;
        m++;
    }

    
    // while döngüsü ile 1 ile 21 arasındaki çift sayıları aralarında , olacak şekkilde yazan program

    int ç = 2;
    while (ç < 21) {
        cout << ç << ",";
        ç += 2;
    }


    // break kullanımı

    int b;
    for (b = 0; b < 100; b++) {
        if (b == 50)
            break;
        cout << b << endl;
    }
    cout << "i değeri" << b << "iken döngüden çıkıldı";
    cout << endl;
    cout << "-----------------------------------------------------------------------------";
    cout << endl;
    // continue kullanımı

    int o;
    for (o = 0; o < 100; o++) {
        if (o == 50)
            //break;
            continue;//bir bakıma break ile continue aynıdır.
        cout << o << endl;
    }
    cout << "o değeri" << o << "iken döngüden çıkıldı";
    

    
       // Kullanıcının klavyeden art arda girdiği 10 adet tam sayıdan sadece pozitif
        //olanların toplamını bulacak kod 

    int sayi, toplam = 0;
    for (int l = 0; l < 10; l++) {
        cout << "Lutfen " << l + 1 << ". sayiyi giriniz: ";
        cin >> sayi; // girdi istenen komut cindir
        if (sayi > 0) {
            toplam += sayi;
        }
    }
    cout << "Girilen pozitif sayilarin toplami: " << toplam << endl;

    cout << endl;

    //kullanıcıdan 15 sayı isteyip girilen negatif sayıların toplamlarını bulan program

    int sayı, toplamm = 0;
    for (int e = 0; e < 15; e++) {
        cout << e + 1 << " . sayıyı giriniz: ";
        cin >> sayı;//bizden girdi isteyen komut cin dir
            toplamm += sayı;
       
    }
    cout << "girilen negatif sayıların toplamı: " << toplam << endl;

    int sayıı;
    cin >> sayıı;


  








    return  0;

}

