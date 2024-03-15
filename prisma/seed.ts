const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    const autoresdoslivros = [
      {
        nome: "Cornelie Funke",
        historia:
          "Nasceu em 1958, em Dorsten, na Alemanha. Escritora e ilustradora de livros infantis e juvenis, recebeu diversos prêmios literários. Com mais de quarenta títulos publicados, é autora, entre outros, do aclamado O senhor dos ladrões, publicado em 2004 pela Cia. das Letras e best-seller na lista do New York Times. Entre os seus maiores sucessos, está também a trilogia Mundo de Tinta, cujo primeiro volume, Coração de tinta, adaptado para o cinema, tornou-se um best-seller mundial, com mais de 4 milhões de exemplares vendidos.",
        imageURL:
          "https://utfs.io/f/286c0661-3415-4034-9c5f-beae81871aa4-a2xaut.jpg", //cornelie
      },

      {
        nome: "Raphael Montes",
        historia:
          "RAPHAEL MONTES nasceu em 1990, no Rio de Janeiro. Escritor e roteirista, publicou os romances Suicidas, Dias perfeitos, O vilarejo, Jantar secreto e Uma mulher no escuro, vencedor do prêmio Jabuti 2020. Seus livros estão traduzidos em mais de 25 países e têm os direitos de adaptação vendidos para o teatro e o cinema. Escreveu os filmes Praça Paris, A menina que matou os pais e O menino que matou meus pais. É criador, roteirista-chefe e produtor-executivo de Bom dia, Verônica, série de sucesso na Netflix, vencedora do Prêmio APCA 2020 nas categorias melhor ator, melhor atriz e melhor dramaturgia.",
        imageURL:
          "https://utfs.io/f/6b1d18b0-2c20-4315-80c9-6bcd4b58705d-rl25u6.jpg", //raphael montes"
      },
      {
        nome: "Lemony Snicket",
        historia:
          "Nasceu em São Francisco, Califórnia, filho de Sandra Handler Day (seu sobrenome de solteira era Walpole) e de Louis Handler, contador e diretor aposentado do City College of São Francisco, um judeu refugiado da Alemanha. Por parte de mãe, Daniel tem parentesco distante com o escritor inglês Hugh Walpole. Tem também uma irmã mais nova, Rebecca Handler. Formou-se em 1992 pela Universidade Wesleyan, no estado de Connecticut, e também é ex-integrante do Coral de Meninos de São Francisco. É casado com Lisa Brown, artista gráfica que conheceu na universidade, com quem tem um filho chamado Otto Handler, nascido em 2003. Os três moram numa casa de estilo vitoriano, em São Francisco.",
        imageURL:
          "https://utfs.io/f/4bdbf0cc-fa7c-47aa-9f7b-f49cdfc3063e-xcp7l9.jpg", //lemony snicket"
      },
    ];

    const seguinte = {
      nome: "SEGUINTE",
      historia:
        "A Editora Seguinte é uma editora brasileira focada em literatura infantojuvenil, fundada em 2007 como um selo da Companhia das Letras. Seu objetivo principal é oferecer aos leitores jovens uma ampla gama de livros de qualidade, que abordem temas relevantes e cativantes para esse público específico.",
    };

    const series = ["O Mundo de Tinta", "Desventuras em Série"];

    const mundoDeTinta = [
      {
        titulo: "Coração de Tinta",
        tipo: "LIVRO",
        paginas: 563,
        edicao: "1ª edição - 2003",
        numeracaoSerie: 1,
        sinopse:
          "Maggie e seu pai, Mo, compartilham a habilidade de trazer personagens de livros para o mundo real quando lêem em voz alta. Mas quando um vilão sinistro de um livro misterioso os sequestra, Maggie e Mo devem se unir para salvar a si mesmos e ao mundo dos personagens.",
        imageURL:
          "https://utfs.io/f/3abe40a9-6b93-457f-ab39-8805fe5a32b1-l6lb81.jpg",
      },
      {
        titulo: "Sangue de Tinta",
        tipo: "LIVRO",
        paginas: 704,
        edicao: "1ª edição - 2005",
        numeracaoSerie: 2,
        sinopse:
          "Continuando a jornada de Maggie e Mo, eles enfrentam novos desafios quando Mo é arrastado para o mundo do livro de novo, e cabe a Maggie salvá-lo, enfrentando perigos ainda maiores e descobrindo segredos ocultos há muito tempo.",
        imageURL:
          "https://utfs.io/f/a8e5cd85-752c-4fe3-a497-d5402fa6289d-eorjkg.jpg",
      },
      {
        titulo: "Morte de Tinta",
        tipo: "LIVRO",
        paginas: 672,
        edicao: "1ª edição - 2007",
        numeracaoSerie: 3,
        sinopse:
          "No terceiro e último livro da série, Maggie e Mo enfrentam seu inimigo mais perigoso até agora, enquanto lutam para salvar seus entes queridos e o próprio Mundo de Tinta da destruição total.",
        imageURL:
          "https://utfs.io/f/da13ef60-d815-4791-a6a7-4075a4c7cf06-llnohm.jpg",
      },
    ];

    const desventuras = [
      {
        titulo: "Mau Começo",
        tipo: "LIVRO",
        paginas: 190,
        edicao: "1ª edição - 1999",
        numeracaoSerie: 1,
        sinopse:
          "Os órfãos Baudelaire, Violet, Klaus e Sunny, são enviados para morar com um parente distante, o terrível Conde Olaf, que está determinado a roubar sua herança.",
        imageURL:
          "https://utfs.io/f/755c6418-8290-4666-a362-1908d470c001-oqpehw.jpg",
      },

      {
        titulo: "A Sala dos Répteis",
        tipo: "LIVRO",
        paginas: 192,
        edicao: "1ª edição - 1999",
        numeracaoSerie: 2,
        sinopse:
          "Os Baudelaire são enviados para viver com o excêntrico Dr. Montgomery Montgomery, um herpetologista, mas descobrem que Olaf está mais uma vez tramando algo terrível.",
        imageURL:
          "https://utfs.io/f/43471bdc-f6ed-4442-9463-e574c9ac2176-i17591.jpg",
      },

      {
        titulo: "O Lago das Sanguessugas",
        tipo: "LIVRO",
        paginas: 192,
        edicao: "1ª edição - 2000",
        numeracaoSerie: 3,
        sinopse:
          "Os Baudelaire são enviados para um sinistro internato onde enfrentam novos perigos, incluindo um diretor implacável e sanguessugas famintas.",
        imageURL:
          "https://utfs.io/f/1c6e7a7b-8669-412b-aaf3-9095b56e2bef-h164is.jpg",
      },

      {
        titulo: "Serraria Baixo-Astral",
        tipo: "LIVRO",
        paginas: 192,
        edicao: "1ª edição - 2000",
        numeracaoSerie: 4,
        sinopse:
          "Os Baudelaire são enviados para trabalhar em uma serraria sinistra, onde encontram um novo tutor, mas Olaf não está longe.",
        imageURL:
          "https://utfs.io/f/cbc1148a-1e5c-42d2-b2ba-13f44fb015ea-riqg6f.jpg",
      },

      {
        titulo: "Inferno no Colégio Interno",
        tipo: "LIVRO",
        paginas: 224,
        edicao: "1ª edição - 2001",
        numeracaoSerie: 5,
        sinopse:
          "Os Baudelaire enfrentam uma série de desafios quando são enviados para um internato onde a preparação física é mais valorizada do que o aprendizado acadêmico.",
        imageURL:
          "https://utfs.io/f/bfd988c1-9f9e-4b32-bff1-97a9d6784ec2-mrov3q.jpg",
      },

      {
        titulo: "O Elevador Ersatz",
        tipo: "LIVRO",
        paginas: 212,
        edicao: "1ª edição - 2001",
        numeracaoSerie: 6,
        sinopse:
          "Os Baudelaire se encontram em um hotel decadente, onde Olaf está disfarçado mais uma vez e pronto para mais uma tentativa de roubar sua fortuna.",
        imageURL:
          "https://utfs.io/f/e833b0c3-efbd-4e7f-ac59-39ca264f15d1-s6u4tu.jpg",
      },

      {
        titulo: "A Cidade Sinistra dos Corvos",
        tipo: "LIVRO",
        paginas: 216,
        edicao: "1ª edição - 2001",
        numeracaoSerie: 7,
        sinopse:
          "Os Baudelaire chegam a uma cidade sombria cheia de corvos, onde enfrentam mistérios antigos e descobrem segredos sobre suas próprias origens.",
        imageURL:
          "https://utfs.io/f/5a8b1915-15d2-4b25-a721-5bbe2d6b4d04-rzwrko.jpg",
      },

      {
        titulo: "O Hospital Hostil",
        tipo: "LIVRO",
        paginas: 240,
        edicao: "1ª edição - 2001",
        numeracaoSerie: 8,
        sinopse:
          "Os Baudelaire são enviados para um hospital estranho, onde enfrentam médicos sinistros e experimentos perigosos.",
        imageURL:
          "https://utfs.io/f/8bbedde5-8159-441f-b244-cad8add596e1-pde89s.jpg",
      },

      {
        titulo: "O Espetáculo Carnívoro",
        tipo: "LIVRO",
        paginas: 232,
        edicao: "1ª edição - 2002",
        numeracaoSerie: 9,
        sinopse:
          "Os Baudelaire se encontram envolvidos em um circo sinistro, onde Olaf está planejando sua maior trapaça até agora.",
        imageURL:
          "https://utfs.io/f/2ea2cce3-5f1a-409a-83ff-6b7c51cd6dc0-yof5t1.jpg",
      },

      {
        titulo: "O Escorregador de Gelo",
        tipo: "LIVRO",
        paginas: 224,
        edicao: "1ª edição - 2003",
        numeracaoSerie: 10,
        sinopse:
          "Os Baudelaire chegam a uma montanha gelada onde enfrentam traições surpreendentes e perigos mortais.",
        imageURL:
          "https://utfs.io/f/b93d9df5-f77f-419c-9ffb-e8759d0201ed-y1pem8.jpg",
      },

      {
        titulo: "A Gruta Gorgônea",
        tipo: "LIVRO",
        paginas: 268,
        edicao: "1ª edição - 2004",
        numeracaoSerie: 11,
        sinopse:
          "Os Baudelaire são enviados para uma ilha misteriosa, onde encontram um grupo de habitantes peculiares e enfrentam um terrível segredo.",
        imageURL:
          "https://utfs.io/f/37a85a99-27ee-4413-bbaa-f607fb92d13b-xtwha2.jpg",
      },

      {
        titulo: "O Penúltimo Perigo",
        tipo: "LIVRO",
        paginas: 353,
        edicao: "1ª edição - 2005",
        numeracaoSerie: 12,
        sinopse:
          "Os Baudelaire se infiltram em um hotel luxuoso onde descobrem conspirações secretas e preparam-se para enfrentar Olaf uma vez por todas.",
        imageURL:
          "https://utfs.io/f/2595c0a3-fb6b-42a6-ba10-b012ba9f5fba-hc8mrs.jpg",
      },

      {
        titulo: "O Fim",
        tipo: "LIVRO",
        paginas: 324,
        edicao: "1ª edição - 2006",
        numeracaoSerie: 13,
        sinopse:
          "Neste último livro, os Baudelaire finalmente descobrem a verdade sobre suas origens e enfrentam seu destino em um confronto final com Olaf.",
        imageURL:
          "https://utfs.io/f/d38eaa6a-090b-4005-8e91-43fe42e3029a-1pw2i4.jpg",
      },
    ];

    const magicamortal = {
      titulo: "A Mágica Mortal: Uma Aventura do Esquadrão Zero",
      tipo: "LIVRO",
      paginas: 272,
      edicao: "1ª edição - 2023",
      sinopse:
        "No mundo da mágica, nem tudo é o que parece. Pedro sabe disso muito bem, afinal, sempre foi fascinado por ilusionismo. Só não imaginava que ia entrar para valer nesse universo por causa de um crime terrível. Depois que seu melhor amigo é vítima de um mágico sinistro, Pedro decide encontrar o culpado a qualquer custo. Assim, o garoto reúne Pipa, Analu e Miloca, seus amigos de escola, para formar o Esquadrão Zero ― e juntos desvendarem o caso.",
      imageURL:
        "https://utfs.io/f/c3011819-bb7e-4727-90d3-6e0f18f6c3a6-4z5x30.jpg",
    };

    // saga do coração de tinta
    let novoslivros = [];
    for (let i = 0; i < 3; i++) {
      const name = mundoDeTinta[i].titulo;
      const tipo = mundoDeTinta[i].tipo;
      const paginas = mundoDeTinta[i].paginas;
      const edicao = mundoDeTinta[i].edicao;
      const numeracao = mundoDeTinta[i].numeracaoSerie;
      const sinopse = mundoDeTinta[i].sinopse;
      const imageurl = mundoDeTinta[i].imageURL;

      const editoraId = "1563f5f5-16a0-43cb-a235-dde96ea98e3b";
      const autorId = "ee1e1045-870c-44b0-b193-ce0302f0f8cf";
      const serieId = "240202d1-b1bd-4272-880f-29eeeb945a03";

      const livro = await prisma.titulos.create({
        data: {
          titulo: name,
          tipo: tipo,
          paginas: paginas,
          edicao: edicao,
          numeracaoSerie: numeracao,
          sinopse: sinopse,
          imageURLs: imageurl,
          editora: {
            connect: {
              id: editoraId,
            },
          },
          autor: {
            connect: {
              id: autorId,
            },
          },
          serie: {
            connect: {
              id: serieId,
            },
          },
        },
      });
      novoslivros.push(livro);
    }

    let desventuraslivros = [];
    for (let i = 0; i < 13; i++) {
      const name = desventuras[i].titulo;
      const tipo = desventuras[i].tipo;
      const paginas = desventuras[i].paginas;
      const edicao = desventuras[i].edicao;
      const numeracao = desventuras[i].numeracaoSerie;
      const sinopse = desventuras[i].sinopse;
      const imageurl = desventuras[i].imageURL;

      const editoraId = "1563f5f5-16a0-43cb-a235-dde96ea98e3b";
      const autorId = "d60d96f6-819d-4d4a-9121-a50559a3f14f";
      const serieId = "29198f96-1181-4051-9722-2a012e4aa19b";

      const livro = await prisma.titulos.create({
        data: {
          titulo: name,
          tipo: tipo,
          paginas: paginas,
          edicao: edicao,
          numeracaoSerie: numeracao,
          sinopse: sinopse,
          imageURLs: imageurl,
          editora: {
            connect: {
              id: editoraId,
            },
          },
          autor: {
            connect: {
              id: autorId,
            },
          },
          serie: {
            connect: {
              id: serieId,
            },
          },
        },
      });
      desventuraslivros.push(livro);
    }

    let magica = [];

    const name = magicamortal.titulo;
    const tipo = magicamortal.tipo;
    const paginas = magicamortal.paginas;
    const edicao = magicamortal.edicao;
    const sinopse = magicamortal.sinopse;
    const imageurl = magicamortal.imageURL;

    const editoramogicamortalId = "1563f5f5-16a0-43cb-a235-dde96ea98e3b";
    const raphael = "a9e7ad0c-c9b8-45e6-ad79-be05b6a519b0";

    const livro = await prisma.titulos.create({
      data: {
        titulo: name,
        tipo: tipo,
        paginas: paginas,
        edicao: edicao,
        sinopse: sinopse,
        imageURLs: imageurl,
        editora: {
          connect: {
            id: editoramogicamortalId,
          },
        },
        autor: {
          connect: {
            id: raphael,
          },
        },
      },
    });

    magica.push(livro);

    await prisma.$disconnect();
  } catch (error) {
    console.error("Erro ao criar os titulos:", error);
  }
}

seedDatabase();
