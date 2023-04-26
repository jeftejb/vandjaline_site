/*
import nodemailer from 'nodemailer-react'
import {userRequest} from './requesteMetodos'
import dotenv from 'dotenv'
const EMAIL_USER = "uservandja@gmail.com"
const PASS_USER = "929312201"

dotenv.config();





 <Select name ="municipio" onChange={handelChangeEstabelecimento} required>
                    <Option disable>
                            Municipio
                        </Option>
                      <Option value = "Alto_Cauale">Alto Cauale</Option>
                      <Option value = "Alto_Zambeze">Alto Zambeze</Option>
                      <Option value = "Ambaca">Ambaca</Option>
                      <Option value = "Amboim">Amboim</Option>
                      <Option value = "Ambriz">Ambriz</Option>
                      <Option value = "Ambuíla"> Ambuíla</Option>
                      <Option value = "Andulo">Andulo</Option>
                      <Option value = "Bocoio">Bocoio</Option>
                      <Option value = "Benguela">Benguela</Option>
                      <Option value = "Baía_Farta">Baía Farta</Option>
                      <Option value = "Balombo">Balombo</Option>
                      <Option value = "Bembe">Bembe</Option>
                      <Option valeu = "Belas">Belas</Option>
                      <Option value = "Bula_Atumba">Bula Atumba</Option>
                      <Option value = "Belize">Belize</Option>
                      <Option value = "Banga">Banga</Option>
                      <Option value = "Buco_Zau">Buco-Zau</Option>
                      <Option value = "Bibala">Bibala</Option>
                      <Option value = "Bundas">Bundas</Option>
                      <Option value = "Bolongongo">Bolongongo</Option>
                      <Option value = "Bailundo">Bailundo</Option>
                      <Option value = "Buengas">Buengas</Option>
                      <Option value = "Cubal">Cubal</Option>
                      <Option value = "Caiambambo">Caiambambo</Option>
                      <Option value = "Chongoroi">Chongoroi</Option>
                      <Option value = "Cuemba">Cuemba</Option>
                      <Option value = "Cunhinga">Cunhing</Option>
                      <Option value = "Catabola">Catabola</Option>
                      <Option value = "Camacupa">Camacupa</Option>
                      <Option value = "Chinguar">Chinguar</Option>
                      <Option value = "Chitembo">Chitembo</Option>
                      <Option value = "Cabinda">Cabinda</Option>
                      <Option value = "Cacongo">Cacongo</Option>
                      <Option value = "Cuito_Cuanavale">Cuito Cuanavale</Option>
                      <Option value = "Cuchi">Cuchi</Option>
                      <Option value = "Cuangar"> Cuangar</Option>
                      <Option value = "Cuanhama">Cuanhama</Option>
                      <Option value = "Cuvelai">Cuvelai</Option>
                      <Option value = "Curoca">Curoca</Option>
                      <Option value = "Cahama">Cahama</Option>
                      <Option value = "Calai">Calai</Option>
                      <Option value = "Catchiungo">Catchiungo</Option>
                      <Option value = "Caála">Caála</Option>
                      <Option value = "Chibia">Chibia</Option>
                      <Option value = "Chiange">Chiange</Option>
                      <Option value = "Caconda">Caconda</Option>
                      <Option value = "Chicomba">Chicomba</Option>
                      <Option value = "Chipindo">Chipindo</Option>
                      <Option value = "Caluquembe">Caluquembe</Option>
                      <Option value = "Conda">Conda</Option>
                      <Option value = "Cassongue">Cassongue</Option>
                      <Option value = "Cazengo">Cazengo</Option>
                      <Option value = "Cambulo">Cambulo</Option>
                      <Option value = "Camacuio">Camacuio</Option>
                      <Option value = "Chitato">Chitato</Option>
                      <Option value = "Cuilo">Cuilo</Option>
                      <Option valeu = "Cuimba">Cuimba</Option>
                      <Option valeu = "Caungula">Caungula</Option>
                      <Option value = "Cuango">Cuango</Option>
                      <Option value = "Cambambe">Cambambe</Option>
                      <Option value = "Cacolo">Cacolo</Option>
                      <Option value = "Calandula">Calandula</Option> 
                      <Option value = "Caombo">Caombo</Option>
                      <Option value = "Cunda_Dia_Baza">Cunda-Dia-Baza</Option>
                      <Option value = "Cacuzo">Cacuzo</Option>
                      <Option value = "Cuaba_Nzogo">Cuaba Nzogo</Option>
                      <Option value = "Capenda_Camulemba">Capenda Camulemba</Option>
                      <Option value = "Camanongue">Camanongue</Option>
                      <Option value = "Cangandala">Cangandala</Option>
                      <Option value = "Cambundi_Catembo">Cambundi-Catembo</Option>
                      <Option value = "Cameia">Cameia</Option>
                      <Option valeu = "Cazenga">Cazenga</Option>
                      <Option valeu = "Cacuaco">Cacuaco</Option>
                      <Option value = "Dande">Dande</Option>
                      <Option value = "Dala"> Dala</Option>
                      <Option value = "Damba">Damba</Option>
                      <Option value = "Dembos">Dembos</Option>
                      <Option value = "Dirico">Dirico</Option>
                      <Option value = "Ekunha">Ekunha</Option>
                      <Option value = "Ebo">Ebo</Option>
                      <Option value = "Ganda">Ganda</Option>
                      <Option value = "Gonguembo" >Gonguembo</Option>
                      <Option value = "Golungo_Alto">Golungo Alto</Option>
                      <Option value = "Humpata">Humpata</Option>
                      <Option value = "Huambo">Huambo</Option>
                      <Option value = "Icolo_e_Bengo">Icolo e Bengo</Option>
                      <Option valeu = "Icolo_e_Bengo">Icolo e Bengo</Option>
                      <Option value = "Jamba">Jamba</Option>
                      <Option value = "Kuito">Kuito</Option>
                      <Option value = "Kuvango"> Kuvango</Option>
                      <Option valeu = "Kilamba_Kiaxi">Kilamba-Kiaxi"</Option>
                      <Option value = "Lobito">Lobito</Option>
                      <Option value = "Longa">Longa</Option>
                      <Option value = "Londuimbale"> Londuimbale</Option>
                      <Option value = "Lubango">Lubango</Option>
                      <Option value = "Libolo">Libolo</Option>
                      <Option value = "Lucala"> Lucala</Option>
                      <Option value = "Luanda" >Luanda</Option>
                      <Option value = "Longongo">Longongo</Option>
                      <Option value = "Léua">Léua</Option>
                      <Option value = "Luau">Luau</Option>
                      <Option value = "Lucano">Lucano</Option>
                      <Option value = "Luchazes">Luchazes</Option>
                      <Option value = "Luquembo">Luquembo</Option>     
                      <Option value = "Lubalo">Lubalo</Option> 
                      <Option value = "Macocola">Macocola</Option> 
                      <Option value = "Menongue">Menongue</Option>
                      <Option value = "Mavinga">Mavinga</Option>
                      <Option value = "Muxima">Muxima</Option>
                      <Option value = "Muconda"> Muconda</Option> 
                      <Option value = "Marimba">Marimba</Option> 
                      <Option value = "Massango">Massango</Option>
                      <Option value = "Mungo">Mungo</Option>
                      <Option value = "Matala">Matala</Option>
                      <Option value = "Mussende">Mussende</Option>   
                      <Option value = "Malanje">Malanje</Option>
                      <Option value = "Mucari">Mucari</Option>
                      <Option value = "Mucaba">Mucaba</Option>
                      <Option value = "M_Banza_Kongo">M Banza Kongo</Option>
                      <Option valeu = "Moxico">Moxico</Option>
                      <Option value = "Namibe">Namibe</Option>
                      <Option value = "Namacunde">Namacunde</Option>
                      <Option value = "Nambuangongo">Nambuangongo</Option>
                      <Option value = "Negage">Negage</Option>         
                      <Option value = "Nharea">Nharea</Option>
                      <Option valeu = "Noqui">Noqui</Option>
                      <Option value = "N_Zeto">N Zeto</Option>
                      <Option value = "Ombadja">Ombadja</Option>
                      <Option value = "Pango Alúquem">Pango Alúquem</Option>
                      <Option value = "Porto_Amboim">Porto_Amboim</Option>
                      <Option value = "Puri">Puri</Option>
                      <Option value = "Quela">Quela</Option>
                      <Option value = "Quilengues"> Quilengues</Option>
                      <Option value = "Quipungo">Quipungo</Option>
                      <Option valeu = "Quiçama">Quiçama</Option>
                      <Option value = "Quibala">Quibala</Option>
                      <Option value = "Quilenda">Quilenda</Option>
                      <Option value = "Quiculungo">Quiculungo</Option>
                      <Option value = "Quirima">Quirima</Option>
                      <Option valeu = "Quitexe">Quitexe</Option> 
                      <Option valeu = "Quimbele">Quimbele</Option>
                      <Option value = "Rivungo">Rivungo</Option>
                      <Option value = "Samba_Cajú">Samba Cajú</Option> 
                      <Option value = "Sanza_Pombo">Sanza Pombo</Option>
                      <Option value = "Saurimo">Saurimo</Option>
                      <Option value = "Songo">Songo</Option>
                      <Option value = "Soyo"> Soyo</Option>
                      <Option value = "Sumbe">Sumbe</Option>
                      <Option valeu = "Talatona">Talatona</Option>
                      <Option value = "Tchindjenje">Tchindjenje</Option>
                      <Option value = "Tchicala_Tcholoanga">Tchicala-Tcholoanga</Option>
                      <Option value = "Tchitato">Tchitato</Option> 
                      <Option valeu = "Tomboco ">Tomboco </Option>
                      <Option value = "Tombwa">Tombwa</Option>
                      <Option value = "Ucuma">Ucuma</Option>
                      <Option value = "Uíge">Uíge</Option>
                      <Option valeu = "Viana">Viana</Option>
                      <Option value = "Virei">Virei</Option>
                      <Option value = "Waku_Kungo">Waku_Kungo</Option>
                      <Option value = "Xá_Muteba">Xá Muteba</Option> 
                      <Option value = "Zombo">Zombo</Option>
                        
                    </Select>
*/

export const sliderItemns = [
    {
        id:6, 
        img:"/image/baner-4.png", 
        titulo:" Crie a sua loja virtual grátis", 
        desc: "Para de perseguir o dinheiro e comece a perseguir o sucesso. Tony Hsieh",
        bg:"",
        link:"/registro/:%d",
        but:"Criar Agora!!"
    },
        {
            id:1, 
            img:"/image/baner-1.png", 
            titulo:"Não perca nem uma novidade", 
            desc: "Pesquisa de preços para Produtos ou Serviços",
            bg:"", 
            link:"/estabelecimentos",
            but:"Começasar a pesquisar"
        }, 
        
        {
            id:2, 
            img:"/image/baner-7.jpg", 
            titulo:"Organize suas compras!", 
            desc: "Crie a sua lista de compras que te ajudará a organizar melhor as suas compras",
            bg:"", 
            link:"/sobre",
            but:"Saber mais"
        
        }, 
        {
            id:3, 
            img:"/image/baner-2.png", 
            titulo:"Preços Baixos! ", 
            desc: "Encontre e compare os preços dos principais produtos e serviços sem sair do conforto de sua casa",
            bg:"",
            link:"/produtos",
            but:"Não perca tempo!!"

        }, 
       
        {
            id:5, 
            img:"/image/baner-4.png", 
            titulo:"Reservas", 
            desc: "Faça reserva dos seus produtos preferidos atens que eles terminem!.Faça o seu registro para tornar tudo mais facil",
            bg:"",
            link:"/registro/:%d",
            but:"Me Registrar Agora!"
        },
       {
            id:7, 
            img:"/image/baner-6.png", 
            titulo:"Não perca tempo!", 
            desc: "Venda, compre e poupe dinheiro com a vandjaline. Faça o seu registro para tornar tudo mais facil",
            bg:"",
            link:"/registro/:%d",
            but:"Me Registrar Agora!"
        }
]




export const sliderItemnsFazendas = [
    {
        id:6, 
        img:"/image/baner-4.png", 
        titulo:" Crie a sua loja virtual grátis", 
        desc: "Para de perseguir o dinheiro e comece a perseguir o sucesso. Tony Hsieh",
        bg:"",
        link:"/registro/:%d",
        but:"Criar Agora!!"
    },
        {
            id:1, 
            img:"/image/baner-1.png", 
            titulo:"Não perca nem uma novidade", 
            desc: "Pesquisa de preços para Produtos ou Serviços",
            bg:"", 
            link:"/estabelecimentos",
            but:"Começasar a pesquisar"
        }, 
        
        {
            id:2, 
            img:"/image/baner-7.jpg", 
            titulo:"Organize suas compras!", 
            desc: "Crie a sua lista de compras que te ajudará a organizar melhor as suas compras",
            bg:"", 
            link:"/sobre",
            but:"Saber mais"
        
        }, 
        {
            id:3, 
            img:"/image/baner-2.png", 
            titulo:"Preços Baixos! ", 
            desc: "Encontre e compare os preços dos principais produtos e serviços sem sair do conforto de sua casa",
            bg:"",
            link:"/produtos",
            but:"Não perca tempo!!"

        }, 
       
        {
            id:5, 
            img:"/image/baner-4.png", 
            titulo:"Reservas", 
            desc: "Faça reserva dos seus produtos preferidos atens que eles terminem!.Faça o seu registro para tornar tudo mais facil",
            bg:"",
            link:"/registro/:%d",
            but:"Me Registrar Agora!"
        },
       {
            id:7, 
            img:"/image/baner-6.png", 
            titulo:"Não perca tempo!", 
            desc: "Venda, compre e poupe dinheiro com a vandjaline. Faça o seu registro para tornar tudo mais facil",
            bg:"",
            link:"/registro/:%d",
            but:"Me Registrar Agora!"
        }
]




export const sliderItemnsTurismo = [
    {
        id:6, 
        img:"/image/lubango4.jpg", 
        titulo:" Crie a sua loja virtual grátis", 
        desc: "Para de perseguir o dinheiro e comece a perseguir o sucesso. Tony Hsieh",
        bg:"",
        link:"/registro/:%d",
        but:"Criar Agora!!"
    },
        {
            id:1, 
            img:"/image/lubango6.jpg", 
            titulo:"Não perca nem uma novidade", 
            desc: "Pesquisa de preços para Produtos ou Serviços",
            bg:"", 
            link:"/estabelecimentos",
            but:"Começasar a pesquisar"
        }, 
        
        {
            id:2, 
            img:"/image/tundavala.jpg", 
            titulo:"Organize suas compras!", 
            desc: "Crie a sua lista de compras que te ajudará a organizar melhor as suas compras",
            bg:"", 
            link:"/sobre",
            but:"Saber mais"
        
        }, 
        {
            id:3, 
            img:"/image/leba.jpg", 
            titulo:"Preços Baixos! ", 
            desc: "Encontre e compare os preços dos principais produtos e serviços sem sair do conforto de sua casa",
            bg:"",
            link:"/produtos",
            but:"Não perca tempo!!"

        }, 
       
        
]

export const Paises =[
    {
        id:1,
        titulo:"Angola"
    }

]

export const ProvinciasAngola = [
        {id:1,
        titulo:"Província do Bengo"
        }, 

        {id:2,
        titulo:"Província de Benguela"
        },
            
        {id:3,
        titulo:"Província do Bié"
        }
        ,{id:4,
        titulo:" Província de Cabinda"
        },
        {id:5,
        titulo:"Província do Cuando-Cubango "
        },
                        
        {id:6,
        titulo:"Província do Cunene"
        }, 
        {id:7,
        titulo:"Província do Huambo"
        }, 

            {id:8,
        titulo:"Província da Huíla"
        }, 

        {id:9,
        titulo:"Província do Kwanza Sul"
        }, 

        {id:10,
        titulo:"Província do Kwanza Norte"
        } ,

        {id:11,
        titulo:"Província de Luanda"
        }, 

        {id:12,
        titulo:"Província da Lunda Norte"
        }, 

        {id:13,
        titulo:"Província da Lunda Sul"
        }, 

        {id:14,
        titulo:"Província de Malanje"
        }, 

        {id:15,
        titulo:"Província do Moxico"
        }, 

        {id:16,
        titulo:"Província do Namibe"
        }, 

        {id:17,
        titulo:"Província do Uíge"
        }, 

        {id:18,
        titulo:"Província do Zaire"
        }

]

export const  MunicipiosAngola = [
  
    {
        id:1, 
        titulo:" Dande"
    },
    {
        id:2, 
        titulo:"Ambriz"
    },
    {
        id:3, 
        titulo:"Icolo e Bengo"
    },
    {
        id:4, 
        titulo:" Muxima"
    },
    {
        id:5, 
        titulo:"Nambuangongo"
    },

    {
        id:6, 
        titulo:" Lobito"
    },
    {
        id:7, 
        titulo:"Bocoio"
    },
    {
        id:8, 
        titulo:" Balombo"
    },
    {
        id:9, 
        titulo:"Ganda"
    },
    {
        id:10, 
        titulo:"Cubal"
    },
    {
        id:11, 
        titulo:"Caiambambo"
    },
    {
        id:12, 
        titulo:"Benguela"
    },
    {
        id:13, 
        titulo:"Baía Farta"
    },
    {
        id:14, 
        titulo:"Chongoroi"
    },
    {
        id:15, 
        titulo:"Kuito"
    },
    {
        id:16, 
        titulo:"Andulo"
    },
    {
        id:17, 
        titulo:"Nharea"
    },
    {
        id:18, 
        titulo:"Cuemba"
    },
    {
        id:19, 
        titulo:"Cunhinga"
    },
    {
        id:20, 
        titulo:"Catabola"
    },
    {
        id:21, 
        titulo:"Camacupa"
    },
    {
        id:22, 
        titulo:"Chinguar"
    },
    {
        id:23, 
        titulo:"Chitembo"
    },
  
    {
        id:24, 
        titulo:" Cabinda"
    },
    {
        id:25, 
        titulo:"Cacongo"
    },
    {
        id:26, 
        titulo:" Buco-Zau"
    },
    {
        id:27, 
        titulo:"Belize"
    },
   
    {
        id:28, 
        titulo:" Menongue"
    },
    {
        id:29, 
        titulo:"Cuito Cuanavale"
    },
    {
        id:30, 
        titulo:"Cuchi"
    },
    {
        id:31, 
        titulo:" Cuangar"
    },
    {
        id:32, 
        titulo:"Longa"
    },
    {
        id:33, 
        titulo:"Mavinga"
    },

    {
        id:34, 
        titulo:" Calai"
    },
    {
        id:35, 
        titulo:"Dirico"
    },
    {
        id:36, 
        titulo:"Rivungo"
    },

    
    {
        id:37, 
        titulo:"Cuanhama"
    },
    {
        id:38, 
        titulo:"Ombadja"
    },
    {
        id:39, 
        titulo:"Cuvelai"
    },
    {
        id:40, 
        titulo:"Curoca"
    },
    {
        id:41, 
        titulo:"Cahama"
    },
    {
        id:42, 
        titulo:"Namacunde"
    },
    
    {
        id:43, 
        titulo:"Huambo"
    },
    {
        id:44, 
        titulo:" Londuimbale"
    },
    {
        id:45, 
        titulo:" Bailundo"
    },
    {
        id:46, 
        titulo:"Mungo"
    },
    {
        id:47, 
        titulo:"Tchindjenje"
    },
    {
        id:48, 
        titulo:"Ucuma"
    },
   
    {
        id:49, 
        titulo:" Ekunha"
    },
    {
        id:50, 
        titulo:"Tchicala-Tcholoanga"
    },
    {
        id:51, 
        titulo:"Catchiungo"
    },
    {
        id:52, 
        titulo:"Longongo"
    },
    {
        id:53, 
        titulo:"Caála"
    },

    {
        id:54, 
        titulo:" Quilengues"
    },
    {
        id:55, 
        titulo:"Lubango"
    },
    {
        id:56, 
        titulo:"Humpata"
    },
    {
        id:57, 
        titulo:"Chibia"
    },
    {
        id:58, 
        titulo:" Chiange"
    },
    {
        id:59, 
        titulo:"Quipungo"
    },
    
    {
        id:60, 
        titulo:"Caluquembe"
    },
    {
        id:61, 
        titulo:"Caconda"
    },
    {
        id:62, 
        titulo:"Chicomba"
    },
    {
        id:63, 
        titulo:" Matala"
    },
    {
        id:64, 
        titulo:" Jamba"
    },
    {
        id:65, 
        titulo:"Chipindo"
    },
    {
        id:66, 
        titulo:" Kuvango"
    },
    
    {
        id:67, 
        titulo:"Sumbe"
    },
    {
        id:68, 
        titulo:" Porto Amboim"
    },
    {
        id:69, 
        titulo:"Quibala"
    },
    {
        id:70, 
        titulo:" Libolo"
    },
    {
        id:71, 
        titulo:"Mussende"
    },
    {
        id:72, 
        titulo:"Amboim"
    },
  
    {
        id:73, 
        titulo:" Ebo"
    },
    {
        id:74, 
        titulo:" Quilenda"
    },
    {
        id:75, 
        titulo:"Conda"
    },
    {
        id:76, 
        titulo:"Waku Kungo"
    },
    {
        id:77, 
        titulo:" Seles"
    },
    {
        id:78, 
        titulo:" Cassongue"
    },
    
    {
        id:79, 
        titulo:"Cazengo"
    },
    {
        id:80, 
        titulo:" Lucala"
    },
    {
        id:81, 
        titulo:"Ambaca"
    },
    {
        id:82, 
        titulo:" Golungo Alto"
    },
    {
        id:83, 
        titulo:"Dembos"
    },
    {
        id:84, 
        titulo:"Bula Atumba"
    },
    {
        id:85, 
        titulo:"Cambambe"
    },
    {
        id:86, 
        titulo:"Quiculungo"
    },
    {
        id:87, 
        titulo:"Bolongongo"
    },
    {
        id:88, 
        titulo:"Banga"
    },
    {
        id:89, 
        titulo:"Samba Cajú"
    },
    {
        id:90, 
        titulo:"Gonguembo"
    },
    {
        id:91, 
        titulo:"Pango Alúquem"
    },
    {
        id:92, 
        titulo:"Luanda"
    },
    
    {
        id:93, 
        titulo:" Tchitato"
    },
    {
        id:94, 
        titulo:"Cambulo"
    },
    {
        id:95, 
        titulo:"Chitato"
    },
    {
        id:96, 
        titulo:"Cuilo"
    },
    {
        id:97, 
        titulo:"Caungula"
    },
   
    {
        id:98, 
        titulo:"Cuango"
    },
    {
        id:99, 
        titulo:"Lubalo"
    },
    {
        id:100, 
        titulo:"Capenda Camulemba"
    },
    {
        id:101, 
        titulo:"Xá Muteba"
    },
  
    {
        id:102, 
        titulo:" Saurimo"
    },
    {
        id:103, 
        titulo:" Dala"
    },
    {
        id:104, 
        titulo:" Muconda"
    },
    {
        id:105, 
        titulo:" Cacolo"
    },
   
    {
        id:106, 
        titulo:" Massango"
    },
    {
        id:107, 
        titulo:"Marimba"
    },
    {
        id:108, 
        titulo:" Calandula"
    },
    {
        id:109, 
        titulo:"Caombo"
    },
    {
        id:110, 
        titulo:"Cunda-Dia-Baza"
    },
    {
        id:111, 
        titulo:"Cacuzo"
    },
   
    {
        id:112, 
        titulo:"Cuaba Nzogo"
    },
    {
        id:113, 
        titulo:"Quela"
    },
    {
        id:114, 
        titulo:"Malanje"
    },

    {
        id:115, 
        titulo:"Mucari"
    },

    {
        id:116, 
        titulo:"Cangandala"
    },

    {
        id:117, 
        titulo:"Cambundi-Catembo"
    },

    {
        id:118, 
        titulo:"Luquembo"
    },

    {
        id:119, 
        titulo:"Quirima"
    },
   
    {
        id:120, 
        titulo:"Moxico"
    },

    {
        id:121, 
        titulo:"Camanongue"
    },

    {
        id:122, 
        titulo:"Léua"
    },

    {
        id:123, 
        titulo:"Cameia"
    },

    {
        id:124, 
        titulo:"Luau"
    },
    
    {
        id:125, 
        titulo:"Lucano"
    },

    {
        id:126, 
        titulo:"Alto Zambeze"
    },

    {
        id:127, 
        titulo:"Luchazes"
    },

    {
        id:128, 
        titulo:"Bundas "
    },
   

    {
        id:129, 
        titulo:"Namibe"
    },


    {
        id:130, 
        titulo:" Camacuio"
    },

    {
        id:131, 
        titulo:"Bibala"
    },

    {
        id:132, 
        titulo:"Virei"
    },

    {
        id:133, 
        titulo:"Tombwa"
    },
  
    {
        id:134, 
        titulo:" Zombo"
    },

    {
        id:135, 
        titulo:"Quimbele"
    },

    {
        id:136, 
        titulo:"Damba"
    },

    {
        id:137, 
        titulo:" Mucaba"
    },

    {
        id:138, 
        titulo:" Macocola"
    },
 

    {
        id:139, 
        titulo:"Bembe"
    },

    {
        id:140, 
        titulo:" Songo"
    },

    {
        id:141, 
        titulo:"Buengas"
    },

    {
        id:142, 
        titulo:"Sanza Pombo"
    },
  

    {
        id:143, 
        titulo:" Ambuíla"
    },
    {
        id:144, 
        titulo:"Uíge"
    },
    {
        id:145, 
        titulo:"Negage"
    },
    {
        id:146, 
        titulo:"Puri"
    },
    {
        id:147, 
        titulo:"Alto Cauale"
    },
    {
        id:148, 
        titulo:"Quitexe "
    },
   
    {
        id:149, 
        titulo:" M Banza Kongo"
    },
    {
        id:150, 
        titulo:" Soyo"
    },
    {
        id:151, 
        titulo:" N Zeto"
    },
    {
        id:152, 
        titulo:"Cuimba"
    },
    {
        id:153, 
        titulo:" Noqui"
    },
    {
        id:154, 
        titulo:"Tomboco "
    },
    
    {
        id:155, 
        titulo:"Cazenga"
    },
    {
        id:156, 
        titulo:"Belas"
    },
    {
        id:157, 
        titulo:"Cacuaco"
    },
    {
        id:158, 
        titulo:"Icolo e Bengo"
    },
   
    {
        id:159, 
        titulo:" Quiçama"
    },
    {
        id:160, 
        titulo:"Viana"
    },
    {
        id:161, 
        titulo:"Luanda"
    },
    {
        id:162, 
        titulo:"Talatona"
    },
    {
        id:163, 
        titulo:" Kilamba-Kiaxi"
    },



]

/*

export const confirmarEmailIntermediario = async (dado)=>{

    try{
               
        await userRequest.put(`/users/${dado.id}`, {codigoConfirm: dado.codigoConfirm})
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: EMAIL_USER, // generated ethereal user
            pass: PASS_USER, // generated ethereal password
          },
        });
      
        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: `"Fred Foo 👻" <${EMAIL_USER}>`, // sender address
          to: dado.email, // list of receivers
          subject: "Hello ✔", // Subject line
          text: "Hello world?", // plain text body
          html: "<b>Hello world?</b>", // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      
   }catch{ 
       console.log("nao foi possivel enviar o email")
   }

}




// email de confirmacao
export const confirmarEmailCadastro  = async (email)=>{
   
    try{
    
         // create reusable transporter object using the default SMTP transport
         let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: EMAIL_USER, // generated ethereal user
              pass: PASS_USER, // generated ethereal password
            },
          });
          // send mail with defined transport object
             await transporter.sendMail({
            from: `"Vandjaline👻" <${EMAIL_USER}>`, // sender address
            to: email.email, // list of receivers
            subject: "Saudações vandja✔", // Subject line
            text: "Seja bem vindo", // plain text body
            html: `
            
            <b>Muito obrigado por se inscrever no nosso site, esperamos que tenha uma boa esperiencia navegando no nosso site, mas para concluir o cadastro por favor clique em confirmar cadastro</b>
            <a href ="${process.env.REACT_APP_SITE_BASE}/confirmar/${email.id}" >Confirmar cadastro <a/>
            `, // html body
          });
        
    
    
    }catch(erro){
        console.log(erro)
    
    }
    
}
//email de recuperacao de senha
export const emailRecuperacaoDeSenha = async ( dados)=>{
   
        try{
        
             // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: EMAIL_USER, // generated ethereal user
              pass: PASS_USER, // generated ethereal password
            },
          });
              // send mail with defined transport object
                 await transporter.sendMail({
                from: `"Vandjaline👻" <${EMAIL_USER}>`, // sender address
                to: dados.email, // list of receivers
                subject: "Saudações vandja Recuperação de senha ✔", // Subject line
                text: "Seja bem vindo", // plain text body
                html: `
                
                <b>Email de recuperação de senha, clica no link  "recuperar" para finalizar o processo obrigado. </b>
                <a href ="${process.env.REACT_APP_SITE_LINK}/recuperar/senha/mudar/${dados.email}" >Recuperar<a/>
                `, // html body
              });
            
        
        
        }catch(erro){
            console.log(erro)
        
        }
        
}
        //email pagamento
export const emailFatura = async (dados)=>{
            try{
                // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: EMAIL_USER, // generated ethereal user
              pass: PASS_USER, // generated ethereal password
            },
          });
                  // send mail with defined transport object
                     await transporter.sendMail({
                    from: `"Vandjaline👻" <${EMAIL_USER}>`, // sender address
                    to: dados.email, // list of receivers
                    subject: "Saudações vandja✔", // Subject line
                    text: "Seja bem vindo", // plain text body
                    html: `

                    <b>Solicitacao de pagamento da loja ${dados.nome} </b><br/><br/>
                    <b>Muito obrigado por usares  no nosso site, esperamos que continues a usar o nosso tite </b><br/><br/>

                    <table style=>
                    <thead>
                    <tr className="widgetLgTr">
                      <th className="widgetLgTh">Produto</th>
                      <th className="widgetLgTh">Quantidade</th>
                      <th className="widgetLgTh">Valor</th>
                     
                    </tr>
                    </thead>
                    <tbody>
                    ${dados.produtos.map((fatura, i)=>(
                    `
                    <tr className="widgetLgTr" key=${i}>
                    
                      <td className="widgetLgUser">
                        <span className="widgetLgName">${fatura?.titulo }</span>
                      </td>
                      <td className="widgetLgDate">${fatura?.quantidade}</td>
                      <td className="widgetLgAmount">${fatura?.preco}</td>
                    </tr>
                `
                    ))}
                    </tbody>
                  </table><br/><br/>
                  Valor a se pagar  :${Number(dados.total).toFixed(2)} <br/> <br/>
                  <a href="${dados.url}" >Efectuar Pagamento</a>

                   Contactos da loja : <br/>
                   Telefone: ${dados.telefone}<br/>
                   email: ${dados.emailLoja}<br/><br/>

                   
                    `, // html body
                  });
                
            
            
            }catch(erro){
                console.log(erro)
            
            }
            
}
// email de canselamento de pedido
export const emailDeCanselamento = async (dados)=>{
    try{
    
       // create reusable transporter object using the default SMTP transport
       let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: EMAIL_USER, // generated ethereal user
          pass: PASS_USER, // generated ethereal password
        },
      });
        
          // send mail with defined transport object
             await transporter.sendMail({
            from: `"Vandjaline👻" <${EMAIL_USER}>`, // sender address
            to: dados.email, // list of receivers
            subject: "Saudações vandja , Aviso de canselamento !!", // Subject line
            text: "Emial de canselamento", // plain text body
            html: `
            
            <b>Email de canselamento a Loja ${dados.loja} canselou o seu pedido </b><br/><br/>
            <a href ="${process.env.REACT_APP_SITE_LINK}/login" >Ir para o site<a/>
            `, // html body
          });
        
    
    
    }catch(erro){
        console.log(erro)
    
    }
    
}

*/