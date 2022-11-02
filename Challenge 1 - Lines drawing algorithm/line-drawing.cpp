#include <iostream>
#include <vector>

using namespace std;
int main(int argc, char const *argv[])
{
    vector <int> tabla;
    double x1, x2;
    double y1,y2;
    cout<<"Ingresa el primer punto (separado por un espacio): "<<endl;
    cin>>x1>>y1;
    cout<<"Ingresa el segundo punto (separado por un espacio): "<<endl;
    cin>>x2>>y2;
    double y, x;
    if(x1<x2){
        double m = (y2-y1) / (x2-x1);
        double b = y1 - (m*x1);
        for (double i=x1; i<=x2; i=i+0.10) {
        y = m * (i) + b;
        tabla.push_back(int(i));
        tabla.push_back(int(y));
        }
    } else if (x2<x1)
    {
        double m = (y2-y1) / (x2-x1);
        double b = y1 - (m*x1);
        for (double i=x1; i>=x2; i=i-0.10) {
        y = m * (i) + b;
        tabla.push_back(int(i));
        tabla.push_back(int(y));
        }
    } else if (x1 == x2 && y2>y1) {
        double m = (x2-x1) / (y2-y1);
        double b = x1 - (m*y1);
        for (double i=y1; i<=y2; i=i+0.10){
            x = m * (i) + b;
            tabla.push_back(int(x));
            tabla.push_back(int(i));
        }
    } else {
        double m = (x2-x1) / (y2-y1);
        double b = x1 - (m*y1);
        for (double i=y1; i>=y2; i=i-0.10){
            x = m * (i) + b;
            tabla.push_back(int(x));
            tabla.push_back(int(i));
        }
    }
    cout<< "TABLA DE POSICIONES" <<endl;
    int y_ant, x_ant;
    x_ant = tabla[0];
    y_ant = tabla[1];
    cout<<"x= "<< tabla[0]<<" y= "<<tabla[1]<<endl;
    for (int i=2; i<tabla.size(); i+=2) {
        if(tabla[i]!=x_ant || tabla[i+1]!=y_ant) {
            x_ant = tabla[i];
            y_ant = tabla[i+1];
            cout<<"x= "<< tabla[i]<<" y= "<<tabla[i+1]<<endl;
        }
    }
    return 0;
}
