// 1)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME 2 NUMEROS COMO ARGUMENTOS (x y z) EN EL CUAL
// SI x ES MENOR QUE z, x DIVIDE A z, CASO CONTRARIO SE MULTIPLICAN. RETORNAR
// EL RESULTADO

function NUMEROS(x,z){
    if (x<z) {
       return x/z
       
    }
       return x*z
   }
   console.log (NUMEROS(9,10))
   
   // 2)---------
   // IMPLEMENTAR UNA FUNCIÓN QUE TOME UN VALOR COMO ARGUMENTO Y RETORNE DE QUE TIPO
   // ES (SI ES STRING, NUMBER, BOOLEAN, ETC)
   
   function TIPOdedato(a){
   
       return typeof a
   }
   console.log (TIPOdedato(9))
   // 3)---------
   // IMPLEMENTAR UNA FUNCIÓN QUE TOME 6 VALORES (a,b,c,d,e,f) COMO ARGUMENTOS
   // - a y b SE SUMAN
   // - EL RESULTADO DE LA SUMA SE RESTA CON c
   // - LUEGO SE MULTIPLICA POR d Y SE DIVIDE POR e
   // - FINALMENTE SE HACE LA POTENCIA CON EL EXPONENTE f.
   // - SE RETORNA EL RESULTADO
   // - TIP: RECORDAR EL ORDEN
   
   function seisvalores(a,b,c,d,e,f){
    let SUMA=a+b
    let RESTA=SUMA-c
    let MULTI=RESTA*d
    let DIV=MULTI/e
    let POTEN=Math.pow(DIV,f)
       return POTEN
   }
   console.log(seisvalores(7,4,3,4,4,9))
   // 4)---------
   // IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO Y SE EXTRAIGA LOS
   // ULTIMOS 3 ELEMENTOS. RETORNAR EL RESULTADO COMO UN NUEVO ARRAY.
   
   
   const miarray= ["limon","manzana","kiwi","pera","banana"]
   console.log(miarray.length)
   function arrays(miarray){
    const array=miarray.slice(-3)
       return array
   }
   console.log (arrays(miarray))
   // 5)---------
   // IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO, ORDENAR ALFABÉTICAMENTE
   // Y/O DE MAYOR A MENOR Y RETORNAR EL RESULTADO
   const letras= ["e","d","c","b","a"]
   function ORDENalfa(letras){
    letras.sort()
       return letras
   }
   console.log(ORDENalfa(letras))
   // 6)---------
   // IMPLEMENTAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO UN ARRAY (a) Y UN VALOR(b).
   // LA FUNCION DEBE REMOVER TODOS LOS ELEMENTOS DEL ARRAY IGUALES AL VALOR(b).
   // RETORNAR EL ARRAY FILTRADO
   const a=[3,8,4,6,7,8,]
   function eliminar(a,b){
       for (let i = 0; i<a.length; i++){
           if(a[i] === b){
               a.splice(i, 1)
           }
       }
       return a;
   }
   console.log (eliminar(a,4))
   // 7)---------
   // IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN ARRAY DE NUMEROS COMO ARGUMENTO Y QUE
   // RETORNE LA SUMA DE LOS ELEMENTOS DEL ARRAY. IDEM A ESTE APARTADO CREAR OTRA
   // FUNCIÓN QUE RETORNE EL PROMEDIO DE LOS ELEMENTOS DEL ARRAY.
   
   myArray = [9,2,7,4,1]
   
   function SumArre([]) {
   
       let suma = 0
   
       for (i = 0; i < myArray.length; i++) {
           suma += myArray[i]
       } 
       return promedio = suma/myArray.length
       }
   
   
   console.log(SumArre(myArray))
   
   
   // 8)---------
   // IMPLEMENTAR UNA FUNCIÓN QUE TOME: OBJETO CON 2 O 3 PROPIEDADES Y UN STRING
   // COMO ARGUMENTOS. DEBE RETORNAR EL VALOR DE LA PROPIEDAD CUYA KEY SEA IGUAL
   // AL VALOR DEL STRING DEL ARGUMENTO
   
   const datos = {
       nombre : "Aymará",
       apellido : "cristaldo",
       tel : "3704550932",
   }
   
   function punto9(object, strg){
   
       for (key in object){
           if (key === strg) {
               return object[key]
           } 
   
       }
   
   
   }
   
   console.log(punto9(datos,"apellido"))
   
   // Ej: objeto({nombre: 'Rosa', apellido: 'Gomez', Tel: '12434'}, 'nombre')
       // Retorna 'Rosa'
   
   // 9)---------
   // IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN OBJETO COMO ARGUMENTO Y RETORNAR
   // LA SUMA DE TODOS SUS VALORES.
   
   objetos = [
       {  descripcion: 'frutas', cantidad: 10},
       {  descripcion: 'verdras', cantidad: 50},
       {  descripcion: 'dulces', cantidad: 10},];
       let reduce = objetos.reduce((acumulador, actual) => acumulador + actual.cantidad, 0);
       console.log(reduce)
   