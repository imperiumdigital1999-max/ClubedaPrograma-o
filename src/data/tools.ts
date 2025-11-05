import { AITool } from '../types';

export const aiTools: AITool[] = [
  // Texto
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Assistente de IA conversacional da OpenAI para textos e diálogos',
    image: 'https://arcoindustrial.com.br/wp-content/uploads/2023/03/chat-gpt.jpg',
    coverImage: 'https://arcoindustrial.com.br/wp-content/uploads/2023/03/chat-gpt.jpg',
    url: 'https://chat.openai.com',
    category: 'texto',
    featured: true,
    function: 'IA voltada para geração de textos criativos, respostas naturais e produtividade no dia a dia.',
    applications: [
      'Criar legendas e textos para redes sociais',
      'Automatizar e-mails ou propostas comerciais',
      'Gerar ideias para vídeos, posts e produtos',
      'Traduzir e adaptar conteúdo com contexto'
    ],
    videos: [
      {
        id: '1',
        title: 'Como Usar o CHAT GPT: Tutorial Para Iniciantes (inteligência artificial)',
        thumbnail: 'https://img.youtube.com/vi/iKknmEqawnI/hqdefault.jpg',
        url: 'https://www.youtube.com/watch?v=iKknmEqawnI'
      },
      {
        id: '2',
        title: 'ChatGPT 2025: Tutorial COMPLETO',
        thumbnail: 'https://img.youtube.com/vi/46CUyuZyhlk/maxresdefault.jpg',
        url: 'https://www.youtube.com/watch?v=46CUyuZyhlk&t=50s'
      },
      {
        id: '3',
        title: 'Como utilizar o Chat GPT da Open AI',
        thumbnail: 'https://img.youtube.com/vi/e5dZQvPbIeE/hqdefault.jpg',
        url: 'https://www.youtube.com/watch?v=e5dZQvPbIeE'
      }
    ],
    prompts: [
      {
        id: '1',
        title: 'Criação de Conteúdo para Redes Sociais',
        content: 'Crie 5 legendas criativas para Instagram sobre [TEMA], incluindo hashtags relevantes e call-to-action. O tom deve ser [DESCONTRAÍDO/PROFISSIONAL] e o público-alvo são [DESCREVER PÚBLICO].'
      },
      {
        id: '2',
        title: 'E-mail de Vendas Persuasivo',
        content: 'Escreva um e-mail de vendas para [PRODUTO/SERVIÇO] direcionado a [PÚBLICO-ALVO]. Inclua: assunto chamativo, problema que resolve, benefícios principais e call-to-action irresistível.'
      },
      {
        id: '3',
        title: 'Brainstorm de Ideias Criativas',
        content: 'Gere 10 ideias inovadoras para [PROJETO/CAMPANHA] considerando: orçamento [BAIXO/MÉDIO/ALTO], prazo de [X] dias e objetivo de [DESCREVER OBJETIVO]. Priorize soluções práticas e criativas.'
      }
    ],
    freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
  },
  {
    id: '2',
    name: 'Claude',
    description: 'IA conversacional da Anthropic focada em segurança e utilidade',
    image: 'https://cdn.mos.cms.futurecdn.net/2SDL9AfTXNC6yKnAZzKrgD-1200-80.jpg',
    coverImage: 'https://cdn.mos.cms.futurecdn.net/2SDL9AfTXNC6yKnAZzKrgD-1200-80.jpg',
    url: 'https://claude.ai',
    category: 'texto',
    new: true,
    function: 'Assistente multimodal da Anthropic focado em segurança, raciocínio avançado, análise de documentos e geração de textos éticos e detalhados.',
  applications: [
    'Analisar e resumir PDFs, Excel ou imagens',
    'Responder perguntas complexas com passo‑a‑passo',
    'Gerar código ou assistentes automatizados',
    'Dialogar por voz ou texto com contexto amplo'
  ],
  videos: [
    {
      id: '1',
      title: 'Como Usar o Claude AI (Tutorial Completo da Ferramenta)',
      thumbnail: 'https://img.youtube.com/vi/Wd8xgg7-kmI/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=Wd8xgg7-kmI'
    },
    {
      id: '2',
      title: 'TUTORIAL: Explorando o Claude AI',
      thumbnail: 'https://img.youtube.com/vi/Lrvi-7m3DNY/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=Lrvi-7m3DNY'
    },
    {
      id: '3',
      title: 'LIBERADO - CLAUDE AI no BRASIL!! TUTORIAL ATUALIZADO!',
      thumbnail: 'https://img.youtube.com/vi/uyx3Qe2nwHA/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=uyx3Qe2nwHA'
    }
  ],
  prompts: [
    {
      id: '1',
      title: 'Resumo automático de documentos',
      content: 'Resuma este documento técnico [INSERIR TEXTO/URL] em até 200 palavras, destacando os principais pontos e conclusões.'
    },
    {
      id: '2',
      title: 'Resposta passo-a-passo',
      content: 'Explique passo a passo como resolver o problema: [DESCREVER SITUAÇÃO] com base nas melhores práticas e exemplos claros.'
    },
    {
      id: '3',
      title: 'Código automatizado',
      content: 'Escreva um script em Python que [DESCREVER FUNÇÃO], incluindo comentários e tratamento de erros.'
    }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  {
    id: '3',
    name: 'Jasper',
    description: 'Plataforma de copywriting e marketing com IA',
    image: 'https://waterbearlearning.com/wp-content/uploads/2024/10/jasper-ai-pros-cons.png',
    url: 'https://jasper.ai',
    category: 'texto',
    function: 'Plataforma de IA voltada para marketing e criação de conteúdo em escala, com foco em voz de marca e automação.',
  applications: [
    'Criar posts com voz de marca',
    'Escrever artigos e blog posts',
    'Automatizar e-mails de marketing',
    'Repurpose e SEO'
  ],
  videos: [
    {
      id: '1',
      title: 'Jasper AI Tutorial – Como começar a usar gratuitamente',
      thumbnail: 'https://img.youtube.com/vi/9VrKtMusbP4/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=9VrKtMusbP4'
    },
    {
      id: '2',
      title: 'Jasper AI: Guia completo para iniciantes',
      thumbnail: 'https://img.youtube.com/vi/Kp1vQ8jM6XI/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=Kp1vQ8jM6XI'
    },
    {
      id: '3',
      title: 'Ferramenta Jasper para SEO – Entenda sobre a ferramenta',
      thumbnail: 'https://img.youtube.com/vi/dC6V1Dtj7Q4/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=dC6V1Dtj7Q4'
    }
  ],
  prompts: [
    {
      id: '1',
      title: 'Post para redes sociais',
      content: 'Crie 5 legendas criativas para Instagram sobre [TEMA], com hashtags e call‑to‑action. Tom: [DESCONTRAÍDO/PROFISSIONAL]; público-alvo: [DESCREVER].'
    },
    {
      id: '2',
      title: 'Artigo de blog otimizado',
      content: 'Escreva um artigo de blog de 800 palavras sobre [ASSUNTO], com introdução envolvente, subtítulos e SEO para palavra-chave [PALAVRA‑CHAVE].'
    },
    {
      id: '3',
      title: 'E-mail de vendas persuasivo',
      content: 'Escreva um e‑mail de vendas para [PRODUTO/SERVIÇO] direcionado a [PÚBLICO‑ALVO]. Inclua assunto chamativo, problema, benefícios e call‑to‑action.'
    }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  {
    id: '15',
    name: 'Gamma AP',
    description: 'Plataforma para criação de apresentações, documentos e páginas da web com IA.',
    image: 'https://cdn.mos.cms.futurecdn.net/cfo9wrPuw9H2NXugivFUJh.jpg',
    url: 'https://gamma.app/pt-br?gad_campaignid=22650306607&gad_source=1&gbraid=0AAAAAqWjqPTu9PKp1hIbPuU3M2mjUs8kg&gclid=CjwKCAjwkvbEBhApEiwAKUz6-7CEuv_LlQe4pPF-DND1t8lk9OPuD4rqqQSEzUeUWfc425l6jtI5WBoCeRwQAvD_BwE&utm_campaign=22650306607&utm_content=180288802003&utm_id=tw&utm_medium=search&utm_source=google&utm_term=gamma.app',
    category: 'texto',
    function: 'Ferramenta de IA para criar apresentações e conteúdo visual rapidamente, sem precisar de design avançado.',
  applications: [
    'Criar apresentações profissionais com IA',
  'Gerar documentos interativos',
  'Converter ideias em slides prontos',
  'Compartilhar links interativos e responsivos'
  ],
  videos: [
    {
      id: '1',
      title: 'Como Criar EBOOK com IA e Vender em 48 horas (de GRAÇA)',
      thumbnail: 'https://img.youtube.com/vi/F--LO12a3RE/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=F--LO12a3RE'
    },
    {
      id: '2',
      title: 'Como Usar a Gamma App Para Criar Ebook e Slides Com IA (Tutorial Completo)',
      thumbnail: 'https://img.youtube.com/vi/nnBEHMzsmvw/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=nnBEHMzsmvw'
    },
    {
      id: '3',
      title: 'Como criar apresentações incríveis usando o Gamma App',
      thumbnail: 'https://img.youtube.com/vi/aZs4t-k_1cs/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=aZs4t-k_1cs'
    }
  ],
  prompts: [
    {
  id: '1',
  title: 'Apresentação profissional com IA',
  content: 'Crie uma apresentação de [NÚMERO DE SLIDES] slides sobre [TEMA], com design moderno, texto claro e imagens sugestivas. Público-alvo: [DESCREVER].'
},
{
  id: '2',
  title: 'Resumo visual de relatório',
  content: 'Transforme o relatório sobre [ASSUNTO] em um resumo visual com gráficos, bullet points e destaques principais em formato de slides interativos.'
},
{
  id: '3',
  title: 'Pitch de vendas impactante',
  content: 'Crie um pitch de vendas em formato de apresentação para [PRODUTO/SERVIÇO], incluindo problema, solução, diferenciais e call-to-action, com tom [PROFISSIONAL/DESCONTRAÍDO].'
}
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  // Imagem
  {
    id: '4',
    name: 'Midjourney',
    description: 'Gerador de imagens artísticas com IA via Discord',
    image: 'https://inteligenciasartificiaiswiki.com/wp-content/uploads/2024/04/MidJourney2.png',
    url: 'https://midjourney.com',
    category: 'imagem',
    featured: true,
    function: 'Ferramenta de IA generativa para criação de imagens a partir de descrições em texto, ideal para arte digital e conceituação visual.',
  applications: [
    'Criação de arte personalizada',
    'Mockups visuais',
    'Arte conceitual para games ou filmes',
    'Print‑on‑Demand'
  ],
  videos: [
    {
      id: '1',
      title: 'Como usar o MidJourney! Tutorial completo em português!',
      thumbnail: 'https://img.youtube.com/vi/OSvvqUIoozA/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=OSvvqUIoozA'
    },
    {
      id: '2',
      title: 'TUTORIAL COMPLETO DE MIDJOURNEY PARA INICIANTES',
      thumbnail: 'https://img.youtube.com/vi/xtd1HfEMFsw/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=xtd1HfEMFsw'
    },
    {
      id: '3',
      title: 'Curso de MIDJOURNEY Grátis (TUTORIAL COMPLETO 2024)',
      thumbnail: 'https://img.youtube.com/vi/gxH0Re01Tto/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=gxH0Re01Tto'
    }
  ],
  prompts: [
    {
      id: '1',
      title: 'Arte de personagem',
      content: 'Crie uma ilustração de um personagem futurista em estilo cyberpunk, com detalhes de luz neon e ambiente urbano, alta resolução.'
    },
    {
      id: '2',
      title: 'Mockup de campanha',
      content: 'Gere uma imagem de produto cosmético minimalista com fundo sólido branco, estilo clean e sofisticado.'
    },
    {
      id: '3',
      title: 'Cena conceitual',
      content: 'Crie uma cena animada de fantasia com dragão voando sobre montanhas ao pôr do sol, com cores vibrantes.'
    }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'  
  },
  {
    id: '5',
    name: 'DALL-E 3',
    description: 'Criador de imagens da OpenAI com alta qualidade',
    image: 'https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/8a957468-ab45-454c-a5ac-8474ecd91b39/Screenshot_2025-03-11_082902.png?t=1741692688',
    url: 'https://openai.com/dall-e-3',
    category: 'imagem',
    function: 'IA da OpenAI especializada em gerar imagens a partir de descrições de texto, com alta fidelidade e integração ao ChatGPT.',
  applications: [
    'Criar imagens realistas com base em descrição',
    'Ilustrações para redes sociais',
    'Visuals para projetos e blogs',
    'Design de anúncios com prompt contextual'
  ],
  videos: [
    {
      id: '1',
      title: 'Como usar o DALL‑E 3 (inteligência artificial)',
      thumbnail: 'https://img.youtube.com/vi/_Yn1oH8Nkq4/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=_Yn1oH8Nkq4'
    },
    {
      id: '2',
      title: 'COMO USAR O DALL‑E 3 DE GRAÇA! (DOS MESMOS CRIADORES ...)',
      thumbnail: 'https://img.youtube.com/vi/qcd-TfuaZK8/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=qcd-TfuaZK8'
    },
    {
      id: '3',
      title: 'Como Criar Imagens com Inteligência Artificial usando DALL‑E 3',
      thumbnail: 'https://img.youtube.com/vi/lHT-dQ94Rp0/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=lHT-dQ94Rp0'
    }
  ],
  prompts: [
    { id: '1', title: 'Imagem de produto minimalista', content: 'Gere uma imagem de um produto elegante sobre fundo branco com sombra suave, estilo comercial clean.' },
    { id: '2', title: 'Cena futurista estilizada', content: 'Crie uma imagem de cidade futurista ao entardecer com néon e atmosfera ciberpunk.' },
    { id: '3', title: 'Mascote fofo para marca', content: 'Desenhe um mascote simpático para marca infantil, estilo cartoon com grupo de cores pastel.' }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  {
    id: '6',
    name: 'Leonardo AI',
    description: 'Plataforma completa para geração de imagens',
    image: 'https://assetstorev1-prd-cdn.unity3d.com/key-image/27620a8b-e63f-49ba-a8f1-c7cc057ed1fa.jpg',
    url: 'https://leonardo.ai',
    category: 'imagem',
    new: true,
    function: 'Plataforma de geração de imagens por IA com foco em ilustração, arte digital e controle criativo avançado.',
  applications: [
    'Capas para ebooks e projetos',
    'Personagens estilizados e avatares',
    'Mockups realistas e branding',
    'Arte digital personalizável'
  ],
  videos: [
    {
      id: '1',
      title: 'Leonardo AI: MEGA TUTORIAL 100% GRATUITO passo a passo',
      thumbnail: 'https://img.youtube.com/vi/yeQ_5v1hBTo/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=yeQ_5v1hBTo'
    },
    {
      id: '2',
      title: 'Como USAR O LEONARDO AI para CRIAR IMAGENS',
      thumbnail: 'https://img.youtube.com/vi/hFUqWiAToBs/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=hFUqWiAToBs'
    },
    {
      id: '3',
      title: 'Leonardo AI vs Midjourney – Comparativo de qualidade',
      thumbnail: 'https://img.youtube.com/vi/FXJ-0szMeOY/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=FXJ-0szMeOY'
    }
  ],
  prompts: [
    { id: '1', title: 'Capa de livro misteriosa', content: 'Crie uma capa para livro de suspense com floresta escura e silhueta misteriosa ao fundo.' },
    { id: '2', title: 'Personagem estilo anime', content: 'Desenhe um personagem anime com cabelo azul, uniforme futurista e expressão confiante.' },
    { id: '3', title: 'Arte retrô anos 80', content: 'Gere arte com estética retrô dos anos 80 para pôster de evento tech.' }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  {
    id: '20',
    name: 'Ideogram',
description: 'Gerador de imagens por IA que transforma descrições de texto em imagens, com destaque em criação de texto dentro das imagens.',
    image: 'https://cdn-1.webcatalog.io/catalog/ideogram/ideogram-social-preview.png?v=1714781603954',
    url: 'https://ideogram.ai/',
    category: 'imagem',
   function: 'Ferramenta de texto para imagem que gera visuais com base em prompts descritivos e permite estilo visual, proporção e refinamentos personalizados.',
applications: [
  'Criar imagens realistas a partir de texto',
  'Gerar arte em estilos diversos como 3D, anime, design ou realismo',
  'Incorporar texto legível nas imagens (tipografia precisa)',
  'Ajustar proporção, estilo e usar editor integrado para refinar resultados'
  ],
  videos: [
    {
      id: '1',
      title: 'IDEOGRAM para INICIANTES, Criar Imagem com Texto, Logo, Logotipo e MUITO MAIS!',
      thumbnail: 'https://img.youtube.com/vi/aBkOAb-XiqM/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=aBkOAb-XiqM'
    },
    {
      id: '2',
      title: 'Como o Ideogram Pode Revolucionar Seu Trabalho de Design Gráfico',
      thumbnail: 'https://img.youtube.com/vi/MKLA9y1vqOo/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=MKLA9y1vqOo'
    },
    {
      id: '3',
      title: 'Como usar o Ideogram para gerar imagens com IA',
      thumbnail: 'https://img.youtube.com/vi/C9aEdbxunos/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=C9aEdbxunos'
    }
  ],
  prompts: [
    {
  id: '1',
  title: 'Tigre cinematográfico',
  content: 'Um tigre dormindo na selva com raios de sol filtrando através das árvores, estilo foto realista com profundidade de campo.'
},
{
  id: '2',
  title: 'Festa Art Déco sofisticada',
  content: 'Cena de festa à beira da piscina no estilo Art Déco inspirada em O Grande Gatsby, luz do entardecer e paleta dourada.'
},
{
  id: '3',
  title: 'Menino e cachorro na madeira',
  content: 'Um menino de cabelos loiros e olhos azuis, vestindo jaqueta jeans e camisa xadrez, sentado ao lado de um cachorro amigável sobre tábuas de madeira.'
}
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},

  {
    id: '28',
    name: 'Canva PRO',
description: 'Plataforma de design gráfico online que permite criar apresentações, posts, vídeos e outros materiais visuais com templates prontos.',
image: 'https://marketingdigitalschool.com.br/wp-content/uploads/2023/03/10-beneficios-do-Canva-%E2%80%93-voce-deve-atualizar-para-o-Pro.webp',
url: 'https://www.canva.com/pro/',
category: 'imagem',
function: 'Ferramenta de design que fornece templates, recursos visuais e ferramentas intuitivas para criar conteúdo profissional rapidamente.',
applications: [
  'Criar posts e banners para redes sociais',
  'Desenvolver apresentações profissionais',
  'Editar imagens e vídeos com facilidade',
  'Gerar conteúdos visuais sem necessidade de design avançado'
  ],
  videos: [
    {
      id: '1',
      title: 'Como Usar o CANVA IA?',
      thumbnail: 'https://img.youtube.com/vi/HSykNoQC_x8/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=HSykNoQC_x8'
    },
    {
      id: '2',
      title: '15 Truques e Dicas SECRETAS Canva que Você Não Sabia',
      thumbnail: 'https://img.youtube.com/vi/Th8h8REjOzA/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=Th8h8REjOzA'
    },
    {
      id: '3',
      title: 'Truques do Canva PRO GRATUITOS',
      thumbnail: 'https://img.youtube.com/vi/uf-BPiUxc-Q/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=uf-BPiUxc-Q'
    }
  ],
  prompts: [
  { id: '1', title: 'Post Instagram', content: 'Crie um post visual para Instagram sobre lançamento de produto, estilo moderno e cores vibrantes.' },
  { id: '2', title: 'Apresentação corporativa', content: 'Gere uma apresentação de 10 slides sobre resultados trimestrais da empresa, visual clean e profissional.' },
  { id: '3', title: 'Banner promocional', content: 'Desenvolva um banner para campanha de Black Friday, com foco em chamar atenção e CTA claro.' }
],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  
  // Voz
  {
    id: '7',
    name: 'ElevenLabs',
    description: 'Síntese de voz realista com clonagem vocal',
    image: 'https://i.ytimg.com/vi/dlscfLAMSXA/maxresdefault.jpg',
    url: 'https://elevenlabs.io',
    category: 'voz',
    featured: true,
    function: 'IA especializada em clonagem e síntese de voz humana realista, com suporte multilíngue, inclusive português.',
  applications: [
    'Narrar vídeos ou audiobook',
    'Locução para marketing',
    'Clonagem de voz para atendimento',
    'Leitura automática de textos'
  ],
  videos: [
    {
      id: '1',
      title: 'GUIA COMPLETO DE COMO USAR O ELEVENLABS',
      thumbnail: 'https://img.youtube.com/vi/EFTTgqEm34M/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=EFTTgqEm34M'
    },
    {
      id: '2',
      title: 'Como Usar o ElevenLabs – Criar locução com qualidade',
      thumbnail: 'https://img.youtube.com/vi/wZxdzIdyE5k/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=wZxdzIdyE5k'
    },
    {
      id: '3',
      title: 'COMO USAR O ELEVEN LABS! (CLONAR VOZ, DUBLAGEM ...)',
      thumbnail: 'https://img.youtube.com/vi/XfwS4IuW6Q0/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=XfwS4IuW6Q0'
    }
  ],
  prompts: [
  {
    id: '1',
    title: 'Locução Profissional para Vídeo de Vendas',
    content: 'Crie uma narração masculina com voz firme e entonação comercial para o seguinte roteiro de VSL: "[COLE O ROTEIRO AQUI]". A voz deve transmitir autoridade e confiança, como um apresentador de TV.'
  },
  {
    id: '2',
    title: 'Clonagem de Voz com Emoção Natural',
    content: 'Utilize um áudio de referência com a minha própria voz e gere variações com as seguintes instruções: mantenha o timbre, adicione emoção realista e simule pausas naturais. Ideal para vídeos pessoais e conteúdos autorais.'
  },
  {
    id: '3',
    title: 'Conversão de Texto para Voz Estilo Podcast',
    content: 'Transforme o seguinte texto em uma narração estilo podcast, com voz feminina suave, tom informal e cadência natural de conversa. Ideal para engajar ouvintes em plataformas como Spotify e YouTube.'
  }
],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  {
    id: '8',
    name: 'Murf AI',
    description: 'Gerador de narrações profissionais',
    image: 'https://media.cybernews.com/images/featured-big/2024/12/murf-ai-review.jpg',
    url: 'https://murf.ai',
    category: 'voz',
    function: 'Ferramenta de IA para transformar texto em voz com qualidade profissional para vídeos, cursos e apresentações.',
  applications: [
    'Locução para vídeos institucionais',
    'Narração de cursos online',
    'Comerciais motivacionais',
    'Vídeos de e‑learning com vozes neutras'
  ],
  videos: [
    {
      id: '1',
      title: 'How to Use Murf AI | Murf AI Tutorial 2025',
      thumbnail: 'https://img.youtube.com/vi/XsXF5BuGuBc/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=XsXF5BuGuBc'
    },
    {
      id: '2',
      title: 'Murf.ai Voiceover Tutorial (Create Your First Voice Over Demo)',
      thumbnail: 'https://img.youtube.com/vi/3ADPcgiGMvM/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=3ADPcgiGMvM'
    },
    {
      id: '3',
      title: 'Murf.AI Voice Changer Tutorial - How to Use The Voice',
      thumbnail: 'https://img.youtube.com/vi/xqJWdQSfaJQ/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=xqJWdQSfaJQ'
    }
  ],
  prompts: [
    {
      id: '1',
      title: 'Locução para Vídeo Institucional',
      content: 'Transforme este roteiro institucional em locução com voz clara e profissional, ideal para vídeo corporativo ou apresentação de marca.'
    },
    {
      id: '2',
      title: 'Voz motivacional',
      content: 'Crie uma narração energética para vídeo motivacional de 60 segundos com tom entusiasmado e engajante.'
    },
    {
      id: '3',
      title: 'Curso online narrado',
      content: 'Converta este texto educacional em voz neutra, clara e pausada para uso em aulas online e vídeos de treinamento.'
    }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  {
    id: '17',
    name: 'Natural Readers',
    description: 'Plataforma de conversão de texto em fala com vozes naturais e realistas, disponível em múltiplos idiomas.',
    image: 'https://ati.gmu.edu/wp-content/uploads/nr.png',
    url: 'https://www.naturalreaders.com/',
    category: 'voz',
    function: 'Ferramenta de TTS (Text-to-Speech) que transforma textos, documentos e páginas da web em áudio com vozes naturais, ideal para acessibilidade, estudos e criação de conteúdo.',
  applications: [
     'Converter textos e documentos em áudio',
  'Criar narrações para vídeos e apresentações',
  'Auxiliar no aprendizado de idiomas',
  'Fornecer acessibilidade para pessoas com deficiência visual'
  ],
  videos: [
    {
      id: '1',
      title: 'Clonagem de Voz e Locuções Profissionais com IA - Natural Reader!',
      thumbnail: 'https://img.youtube.com/vi/IcPFeDj-A28/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=IcPFeDj-A28'
    },
    {
      id: '2',
      title: 'Como melhorar os seus textos | Natural Reader',
      thumbnail: 'https://img.youtube.com/vi/HF1BigTSkQ4/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=HF1BigTSkQ4'
    },
    {
      id: '3',
      title: 'Como Usar O Natural Reader Para Criar Clone De Voz | Como Transformar Texto Em Voz Real',
      thumbnail: 'https://img.youtube.com/vi/464Oy97Q1z8/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=464Oy97Q1z8'
    }
  ],
  prompts: [
    {
  id: '1',
  title: 'Narrativa cinematográfica dramática',
  content: 'Use um tom dramático e intenso, com um estilo cinematográfico e cheio de emoção.'
},
{
  id: '2',
  title: 'Suspense em silêncio',
  content: 'Adote um tom silencioso e suspense, quase sussurrado, ideal para narrativas de terror.'
},
{
  id: '3',
  title: 'Conversa canadense descontraída',
  content: 'Imite uma voz alegre e conversacional com um forte sotaque canadense.'
}
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  
  // Vídeo
  {
    id: '9',
    name: 'Runway ML',
    description: 'Suite completa de ferramentas de IA para vídeo',
    image: 'https://vtlogo.com/wp-content/uploads/2023/03/runway-ai-inc-vector-logo.png',
    url: 'https://runwayml.com',
    category: 'video',
    featured: true,
    function: 'Plataforma de criação multimodal com IA para vídeo, imagem e áudio, com edição colaborativa e efeitos criativos.',
  applications: [
    'Edição de vídeo com IA',
    'Green screen automático',
    'Motion graphics por prompt',
    'Visualizações criativas'
  ],
  videos: [
    {
      id: '1',
      title: 'Tutorial Completo de Imagem e Texto para vídeo usando a RUNWAY',
      thumbnail: 'https://img.youtube.com/vi/CmNBt9eov0o/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=CmNBt9eov0o'
    },
    {
      id: '2',
      title: 'RunWay ML: GERANDO VÍDEOS VIRAIS COM IA!',
      thumbnail: 'https://img.youtube.com/vi/lgGOlGVMR1g/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=lgGOlGVMR1g'
    },
    {
      id: '3',
      title: 'Runway ML Gen‑3 Tutorial Completo (em inglês)',
      thumbnail: 'https://img.youtube.com/vi/3pU2hZW4hUw/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=3pU2hZW4hUw'
    }
  ],
  prompts: [
    { id: '1', title: 'Efeito green screen automático', content: 'Remova automaticamente o fundo de um vídeo e substitua por uma cidade futurista usando Runway ML.' },
    { id: '2', title: 'Motion graphics por prompt', content: 'Crie uma animação curta com partículas flutuantes circulares usando um prompt textual.' },
    { id: '3', title: 'Transformação de imagem em vídeo', content: 'Gere um vídeo que transforme uma imagem estática em animações curtas e fluidas.' }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
  },
  {
    id: '10',
    name: 'Synthesia',
    description: 'Criação de vídeos com avatares de IA',
    image: 'https://bizequals.com/media/com_jbusinessdirectory/pictures/companies/70/synthesia-logo-600x450.webp',
    url: 'https://synthesia.io',
    category: 'video',
     function: 'Ferramenta de vídeo com IA que permite criar vídeos com apresentadores virtuais e voz sintetizada.',
  applications: [
    'Aulas online com avatar virtual',
    'Tutoriais narrados sem câmera',
    'Vídeos institucionais e marketing',
    'Conteúdo corporativo automatizado'
  ],
  videos: [
    {
      id: '1',
      title: 'Tutorial Completo da Synthesia (IA Vídeo Maker)',
      thumbnail: 'https://img.youtube.com/vi/81cDEQ0iUQA/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=81cDEQ0iUQA'
    },
    {
      id: '2',
      title: 'Ferramenta incrível: Crie vídeos com IA (Synthesia)',
      thumbnail: 'https://img.youtube.com/vi/jj2qi1LUh48/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=jj2qi1LUh48'
    },
    {
      id: '3',
      title: 'Tutorial em inglês: Complete AI video maker',
      thumbnail: 'https://img.youtube.com/vi/ZEEIEs2ey_4/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=ZEEIEs2ey_4'
    }
  ],
  prompts: [
    { id: '1', title: 'Script para apresentador virtual', content: 'Escreva um texto para avatar virtual apresentar [TEMA] com tom profissional e claro.' },
    { id: '2', title: 'Tutorial narrado estilo e‑learning', content: 'Crie um script passo a passo para ensinar [FERRAMENTA/PROCESSO] com voz fluida e direta.' },
    { id: '3', title: 'Mensagem institucional corporativa', content: 'Escreva uma mensagem institucional formal para clientes com tom sóbrio e envolvente.' }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
  },
  {
    id: '18',
    name: 'Hailuo AI',
description: 'Plataforma de geração de vídeos curtos em IA a partir de texto ou imagem, com controle sobre movimentos de câmera e estilo visual.',
    image: 'https://images.seeklogo.com/logo-png/61/1/hailuo-ai-logo-png_seeklogo-613890.png',
    url: 'https://hailuoai.video/pt',
    category: 'video',
    function: 'Ferramenta de AI para transformar ideias em vídeos de 5–10 segundos, com suporte a texto ou imagem como input e controle de câmera estilo "Director-Mode".',
applications: [
  'Criar vídeos curtos cinematográficos a partir de texto',
  'Transformar imagens estáticas em animações dinâmicas',
  'Adicionar movimentos de câmera como zoom, pan, tilt',
  'Gerar conteúdo visual de marketing ou redes sociais de forma rápida e acessível'
  ],
  videos: [
    {
      id: '1',
      title: 'Como Usar a HAILUO AI - Tutorial Completo 2025 (Gerador de Vídeos e Imagens)',
      thumbnail: 'https://img.youtube.com/vi/IkFPs5CGST8/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=IkFPs5CGST8'
    },
    {
      id: '2',
      title: 'Como usar Hailuo AI de Forma ILIMITADA e GRÀTIS',
      thumbnail: 'https://img.youtube.com/vi/D5pH-fz-Ywo/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=D5pH-fz-Ywo'
    },
    {
      id: '3',
      title: 'Nova Hailuo 2 É a Melhor IA de Vídeo Até Agora, Grátis e Surreal!',
      thumbnail: 'https://img.youtube.com/vi/bmXtTObRH6g/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=bmXtTObRH6g'
    }
  ],
  prompts: [
    {
  id: '1',
  title: 'Dragão cinematográfico',
  content: 'Plano médio com câmera se aproximando, um dragão respira fogo em um castelo ao entardecer, luz dourada e clima épico.'
},
{
  id: '2',
  title: 'Carro na estrada deserta',
  content: 'Wide angle tracking shot: um carro atravessa uma estrada deserta ao entardecer, luz quente, movimento suave da câmera acompanhando.'
},
{
  id: '3',
  title: 'Cena de biblioteca mágica',
  content: 'Medium shot, câmera se afasta revelando uma biblioteca antiga que se transforma em círculo mágico, livros voando com luz azul mística.'
}
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  {
    id: '19',
    name: 'DreamFace',
description: 'Plataforma de criação de vídeos animados e avatares realistas com IA, a partir de imagens, texto ou áudio.',
    image: 'https://cdn-1.webcatalog.io/catalog/dreamface/dreamface-social-preview.png?v=1753059649189',
    url: 'https://dreamfaceapp.com/',
    category: 'video',
   function: 'Ferramenta de IA para transformar fotos, textos ou áudios em vídeos com avatares falantes, animações de abraços, beijos e narrações realistas.',
applications: [
  'Criar avatares que falam a partir de texto ou áudio',
  'Gerar animações divertidas como abraços, beijos e expressões faciais',
  'Transformar fotos de pets em vídeos animados com fala',
  'Remover fundos de imagem e melhorar qualidade de fotos'
  ],
  videos: [
    {
      id: '1',
      title: 'IA para Criar AVATAR FALANTE ULTRA-REALISTA',
      thumbnail: 'https://img.youtube.com/vi/6wypZEHakM8/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=6wypZEHakM8'
    },
    {
      id: '2',
      title: 'Como usar o DreamFace Pro DE GRAÇA ILIMITADO (Sincronização labial)',
      thumbnail: 'https://img.youtube.com/vi/5wqqIsl6d_8/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=5wqqIsl6d_8'
    },
    {
      id: '3',
      title: 'LIP SYNC AI: NOVO MÉTODO PARA CRIAR AVATARES FALANTES PROFISSIONAIS PERFEITOS!',
      thumbnail: 'https://img.youtube.com/vi/tN69kIO1aLk/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=tN69kIO1aLk'
    }
  ],
  prompts: [
    {
  id: '1',
  title: 'Avatar falando mensagem',
  content: 'Avatar realista fala “Bem-vindo ao nosso canal” com entonação amigável e sorriso leve.'
},
{
  id: '2',
  title: 'Pet divertido',
  content: 'Cão fofo com orelhas balançando dizendo “Oi, humanos!” com voz divertida.'
},
{
  id: '3',
  title: 'Abraço animado',
  content: 'Duas pessoas se aproximam e se abraçam emotivamente, com movimento suave e expressão calorosa.'
}
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  {
    id: '21',
    name: 'HeyGen',
description: 'Plataforma de geração de vídeos com IA que transforma texto, áudio ou imagem em vídeos realistas com avatares personalizados.',
    image: 'https://cdn.prod.website-files.com/64f605bdfa749671fed117a9/6509f8b87e384036ac21b954_HeyGen%20AI.png',
    url: 'https://www.heygen.com/',
    category: 'video',
   function: 'Ferramenta de IA que cria vídeos de alta qualidade a partir de texto, áudio ou imagem, com avatares realistas e personalizáveis.',
applications: [
  'Criar vídeos com avatares realistas a partir de texto ou áudio',
  'Gerar vídeos personalizados para marketing, educação e treinamentos',
  'Traduzir vídeos para múltiplos idiomas com sincronização labial',
  'Criar vídeos de apresentadores virtuais para empresas e marcas'
  ],
  videos: [
    {
      id: '1',
      title: 'HEYGEN no Instagram: Crie CONTEÚDO INFINITO, SEM APARECER, com CLONE ou AVATAR!',
      thumbnail: 'https://img.youtube.com/vi/XKYqUuZZb2U/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=XKYqUuZZb2U'
    },
    {
      id: '2',
      title: 'HeyGen a FERRAMENTA DE IA que vai CRIAR SEU CLONE em vídeo',
      thumbnail: 'https://img.youtube.com/vi/5W3fHrBV7Qg/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=5W3fHrBV7Qg'
    },
    {
      id: '3',
      title: 'HeyGen: Como criar seu avatar digital em minutos com IA!',
      thumbnail: 'https://img.youtube.com/vi/3IA6fgkr2GU/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=3IA6fgkr2GU'
    }
  ],
  prompts: [
   {
  id: '1',
  title: 'Apresentador corporativo',
  content: 'Avatar falando sobre inovação tecnológica, vestindo terno escuro, em um escritório moderno com fundo neutro.'
},
{
  id: '2',
  title: 'Instrutor de yoga',
  content: 'Avatar demonstrando postura de yoga, usando roupa esportiva, em um estúdio com iluminação suave.'
},
{
  id: '3',
  title: 'Chef de cozinha',
  content: 'Avatar preparando prato gourmet, usando uniforme de chef, em uma cozinha profissional bem iluminada.'
}
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  {
    id: '23',
    name: 'Vmake',
description: 'Plataforma de criação de vídeos com IA a partir de texto ou roteiro, automatizando a produção de conteúdo audiovisual.',
image: 'https://apktodo.io/uploads/2024/4/vmake-ai-fashion-model-studio-thumbnail.jpg',
url: 'https://vmake.ai/',
category: 'video',
function: 'Ferramenta de IA que transforma roteiros e prompts em vídeos com avatares, narração e efeitos visuais automáticos.',
applications: [
  'Criar vídeos explicativos a partir de textos',
  'Gerar apresentações animadas e tutoriais',
  'Produzir conteúdo para marketing e redes sociais',
  'Adicionar narração automática e legendas'
  ],
  videos: [
    {
      id: '1',
      title: 'Nova IA Para Criar Vídeo Grátis e Imagens GRATUITAS - VMAKE AI',
      thumbnail: 'https://img.youtube.com/vi/ZVrn6GUEoEE/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=ZVrn6GUEoEE'
    },
    {
      id: '2',
      title: 'Transforme Seus Vídeos em 4K com IA!',
      thumbnail: 'https://img.youtube.com/vi/d4TNOSFtEzE/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=d4TNOSFtEzE'
    },
    {
      id: '3',
      title: 'A MELHOR IA para Criar Vídeos GRÁTIS!',
      thumbnail: 'https://img.youtube.com/vi/tS5ARAnhNH0/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=tS5ARAnhNH0'
    }
  ],
  prompts: [
  { id: '1', title: 'Tutorial de aplicativo', content: 'Crie um vídeo explicando como usar o aplicativo X, com narração clara e animações ilustrativas.' },
  { id: '2', title: 'Vídeo promocional', content: 'Gere um vídeo promocional de 30 segundos para produto Y, com tom motivador e imagens animadas.' },
  { id: '3', title: 'Demonstração de produto', content: 'Vídeo mostrando passo a passo do funcionamento de um gadget tecnológico, estilo clean e profissional.' }
],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
{
    id: '24',
    name: 'Submagic AI',
description: 'Ferramenta de geração automática de legendas e transcrição de vídeos utilizando IA avançada.',
image: 'https://d130b8xaedzatc.cloudfront.net/2023/07/Untitled-design-2023-07-05T224640.387.webp',
url: 'https://submagic.ai/',
category: 'video',
function: 'Automatiza a criação de legendas, traduções e transcrições precisas para vídeos, melhorando acessibilidade e alcance.',
applications: [
  'Gerar legendas automáticas para vídeos',
  'Traduzir conteúdo de vídeos para múltiplos idiomas',
  'Criar transcrições editáveis de aulas e webinars',
  'Otimizar vídeos para redes sociais com captions precisas'
  ],
  videos: [
    {
      id: '1',
      title: 'GUIA COMPLETO DE SUBMAGIC AI: LEGENDAS, CORTES E PLANOS',
      thumbnail: 'https://img.youtube.com/vi/7TWVaKOADPY/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=7TWVaKOADPY'
    },
    {
      id: '2',
      title: 'SUBMAGIC: TRANSFORME QUALQUER VÍDEO LONGO EM SHORTS VIRAIS EM SEGUNDOS!',
      thumbnail: 'https://img.youtube.com/vi/4v_N0-xaRZA/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=4v_N0-xaRZA'
    },
    {
      id: '3',
      title: 'Crie LEGENDAS VIRAIS em Apenas UM CLICK Com o SUBMAGIC',
      thumbnail: 'https://img.youtube.com/vi/t3uzGXWlV9o/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=t3uzGXWlV9o'
    }
  ],
  prompts: [
  { id: '1', title: 'Legenda de tutorial', content: 'Crie legendas sincronizadas para um vídeo de tutorial de cozinha de 5 minutos.' },
  { id: '2', title: 'Transcrição multilíngue', content: 'Transcreva e traduza o vídeo em inglês para português e espanhol, mantendo o tempo original.' },
  { id: '3', title: 'Captions para social media', content: 'Gere legendas curtas e envolventes para um vídeo de Instagram de 30 segundos.' }
],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  {
    id: '26',
    name: 'Kreado AI',
description: 'Plataforma de criação de vídeos e imagens com IA, oferecendo ferramentas de narração, animação e edição visual automatizada.',
image: 'https://cdn-1.webcatalog.io/catalog/kreadoai/kreadoai-social-preview.png?v=1714780644257',
url: 'https://kreado.ai/',
category: 'video',
function: 'Permite gerar vídeos animados, imagens e apresentações com narração, usando prompts de texto e ferramentas de IA integradas.',
applications: [
  'Criar vídeos animados com IA a partir de texto',
  'Gerar imagens e animações para marketing e redes sociais',
  'Adicionar narração e legendas automáticas',
  'Produzir conteúdo visual sem precisar de software complexo de edição'
  ],
  videos: [
    {
      id: '1',
      title: 'Como Criar Vídeos com Inteligência Artificial-Kreado.Ai',
      thumbnail: 'https://img.youtube.com/vi/uazXJ7owqdk/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=uazXJ7owqdk'
    },
    {
      id: '2',
      title: 'Faça vídeos com pessoas realistas de graça com o Kredo AI',
      thumbnail: 'https://img.youtube.com/vi/WfhkvAxkxe0/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=WfhkvAxkxe0'
    },
    {
      id: '3',
      title: 'INTELIGÊNCIA ARTIFICIAL GRÁTIS para Criar Vídeo de Humanos Digitais',
      thumbnail: 'https://img.youtube.com/vi/yK4-41M_99o/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=yK4-41M_99o'
    }
  ],
  prompts: [
  { id: '1', title: 'Vídeo educativo', content: 'Crie um vídeo explicando conceitos de ciência para crianças, com animações coloridas e narração clara.' },
  { id: '2', title: 'Anúncio promocional', content: 'Gere um vídeo de 20 segundos promovendo um produto tecnológico, estilo moderno e dinâmico.' },
  { id: '3', title: 'Apresentação corporativa', content: 'Vídeo apresentando resultados trimestrais da empresa, com gráficos animados e narração profissional.' }
],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  // Automação
  {
    id: '11',
    name: 'Zapier',
    description: 'Automação de workflows entre aplicativos',
    image: 'https://sendbird.imgix.net/cms/Zapier-blog.png',
    url: 'https://zapier.com',
    category: 'automacao',
    function: 'Plataforma de automação que conecta apps e APIs para criar fluxos de trabalho sem código.',
  applications: [
    'Automatizar tarefas entre ferramentas',
    'Enviar notificações e e-mails automáticos',
    'Integrar CRMs, calendários e bancos',
    'Acionar IA automaticamente'
  ],
  videos: [
    {
      id: '1',
      title: 'Como Usar o Zapier: Tutorial Completo para Automatizar Tarefas',
      thumbnail: 'https://img.youtube.com/vi/IbbFHGwyxuY/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=IbbFHGwyxuY'
    },
    {
      id: '2',
      title: 'Zapier para iniciantes: 5 automações incríveis',
      thumbnail: 'https://img.youtube.com/vi/ElCFy_0lWmo/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=ElCFy_0lWmo'
    },
    {
      id: '3',
      title: 'O que é e como configurar o Zapier',
      thumbnail: 'https://img.youtube.com/vi/4g6yDevV7ec/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=4g6yDevV7ec'
    }
  ],
  prompts: [
    { id: '1', title: 'Automação de e-mail', content: 'Crie um fluxo no Zapier que envie e-mail quando um formulário do Google Forms for enviado.' },
    { id: '2', title: 'Integração com CRM', content: 'Configure zap para adicionar leads via Typeform diretamente no CRM.' },
    { id: '3', title: 'Notificação por Slack', content: 'Crie automação que envie mensagem no Slack ao registrar compra no WooCommerce.' }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
  },
  {
    id: '12',
    name: 'Make',
    description: 'Plataforma visual para automação avançada',
    image: 'https://mma.prnewswire.com/media/2662866/Make_Logo.jpg?p=facebook',
    url: 'https://make.com',
    category: 'automacao',
    new: true,
    function: 'Ferramenta de automação visual (antiga Integromat) para criar fluxos avançados entre apps.',
  applications: [
    'Automatizar processos visuais',
    'Integrar APIs e dados',
    'Agendar tarefas automatizadas',
    'Fluxos complexos sem codar'
  ],
  videos: [
    {
      id: '1',
      title: 'Tutorial Make (Integromat): Passo a passo para iniciantes',
      thumbnail: 'https://img.youtube.com/vi/HkbO7mpxDmY/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=HkbO7mpxDmY'
    },
    {
      id: '2',
      title: 'MAKE INTEGROMAT: Passo a passo para iniciantes',
      thumbnail: 'https://img.youtube.com/vi/yYiP6RhQ9wM/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=yYiP6RhQ9wM'
    },
    {
      id: '3',
      title: 'Getting Started with Make (30‑Minute Crash Course)',
      thumbnail: 'https://img.youtube.com/vi/lKkGewKvXdo/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=lKkGewKvXdo'
    }
  ],
  prompts: [
    { id: '1', title: 'Integração visual inicial', content: 'Crie fluxo que extrai dados de Google Sheets e envia por e-mail automaticamente.' },
    { id: '2', title: 'Agendamento automático', content: 'Automatize postagens no Instagram a partir de itens marcados no Trello.' },
    { id: '3', title: 'API externa via webhook', content: 'Configure conexão com API externa para processar dados em tempo real no Make.' }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
  },
  {
    id: '16',
    name: 'Clicopy',
    description: 'Plataforma para afiliados que clona e personaliza páginas de vendas com edição visual e integração fácil.',
    image: 'https://clicopy.com/wp-content/uploads/2023/10/imagem.png',
    url: 'https://clicopy.com/',
    category: 'automacao',
    function: 'Ferramenta para clonagem rápida de páginas de vendas ou advertoriais, com editor visual e integração com WordPress ou hospedagem via Google Drive.',
  applications: [
    'Clonar landing pages, VSLs ou advertoriais',
  'Editar textos, links e imagens visualmente',
  'Inserir pixels de rastreamento e tags com um clique',
  'Publicar em WordPress ou hospedagem gratuita no Google Drive'
  ],
  videos: [
    {
      id: '1',
      title: 'Clicopy 2 em 1 - Clonador de Páginas!',
      thumbnail: 'https://img.youtube.com/vi/spN2TfnvNRU/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=spN2TfnvNRU'
    },
    {
      id: '2',
      title: 'Clicopy Clonador de Páginas de Vendas: Clonando e Editando Páginas em Minutos!',
      thumbnail: 'https://img.youtube.com/vi/tzElqOc4og8/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=tzElqOc4og8'
    },
    {
      id: '3',
      title: 'CLONE SEM MENSALIDADE EM SEGUNDOS Edita a clonagem e CRIE PRESELL - Clicopy 2.0',
      thumbnail: 'https://img.youtube.com/vi/8w10h_g6dyE/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=8w10h_g6dyE'
    }
  ],
  prompts: [
    {
  id: '1',
  title: 'Esta IA não trabalha com PROMPTS',
  content: 'N/A.'
},
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  
  // Código
  {
    id: '13',
    name: 'GitHub Copilot',
    description: 'Assistente de código da Microsoft e GitHub',
    image: 'https://aps.autodesk.com/sites/default/files/2024-10/Screenshot%202024-10-03%20at%2015.34.40.png',
    url: 'https://github.com/features/copilot',
    category: 'codigo',
    featured: true,
    function: 'Assistente de codificação por IA integrado ao VS Code que sugere e escreve código automaticamente.',
  applications: [
    'Autocompletar funções em código',
    'Refatorar código e documentação',
    'Codificação assistida em tempo real',
    'Ajuda contextual durante programação'
  ],
  videos: [
    {
      id: '1',
      title: 'Introduction to GitHub Copilot (em português)',
      thumbnail: 'https://img.youtube.com/vi/aoyhoIZk56A/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=aoyhoIZk56A'
    },
    {
      id: '2',
      title: 'GitHub Copilot Tutorial In‑Depth',
      thumbnail: 'https://img.youtube.com/vi/m6VwoXAaiXI/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=m6VwoXAaiXI'
    },
    {
      id: '3',
      title: 'Getting Started with GitHub Copilot (VS Code)',
      thumbnail: 'https://img.youtube.com/vi/f8CkP7SC-kM/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=f8CkP7SC-kM'
    }
  ],
  prompts: [
    { id: '1', title: 'Autocompletar função', content: 'Use Copilot para gerar função em JS que filtre lista de objetos por valor da propriedade X.' },
    { id: '2', title: 'Refatoração de código', content: 'Peça para refatorar este código mantendo lógica e legibilidade: [INSERIR CÓDIGO].' },
    { id: '3', title: 'Documentação automática', content: 'Gere documentação JSDoc para a função abaixo: [INSERIR FUNÇÃO].' }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
  },
  {
    id: '14',
    name: 'Cursor',
    description: 'Editor de código com IA integrada',
    image: 'https://cdn.prod.website-files.com/65caf7635d745af6514ffcd8/6839f5caeb82f3e2a640a592_cursor-ai.jpg',
    url: 'https://cursor.sh',
    category: 'codigo',
    new: true,
    function: 'Assistente de IA para programação que ajuda a buscar código, resolver bugs e navegar em grandes bases de código.',
  applications: [
    'Buscar trechos de código em projetos grandes',
    'Resolver erros e sugerir melhorias',
    'Exibir exemplos de APIs',
    'Agilizar revisão de código'
  ],
  videos: [
    {
      id: '1',
      title: 'Tutorial Cursor AI para Iniciantes: Do Zero ao Primeiro Projeto',
      thumbnail: 'https://img.youtube.com/vi/g9DasSpTNrc/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=g9DasSpTNrc'
    },
    {
      id: '2',
      title: 'TUTORIAL CURSOR IDE – Aprenda a usar a IDE Cursor (em português)',
      thumbnail: 'https://img.youtube.com/vi/VZG95JS_Ab4/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=VZG95JS_Ab4'
    },
    {
      id: '3',
      title: 'Cursor AI Course 2025 Edition (em inglês)',
      thumbnail: 'https://img.youtube.com/vi/3289vhOUdKA/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=3289vhOUdKA'
    }
  ],
  prompts: [
    { id: '1', title: 'Busca de função em código', content: 'Use o Cursor para encontrar onde está sendo usada a função "[NOME_FUNÇÃO]" num projeto grande.' },
    { id: '2', title: 'Correção de bug', content: 'Explique e corrija este erro no código: "[COLAR ERRO AQUI]".' },
    { id: '3', title: 'Exemplo de API', content: 'Mostre como usar a API pública de [NOME_API] com código claro e comentado.' }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
  },
    //Banco de Imagens
{
    id: '27',
    name: 'LovePik',
description: 'Banco de imagens e recursos visuais com fotos, vetores e ilustrações para uso profissional e pessoal.',
image: 'https://so1design.com/uploads/lovepik.jpg',
url: 'https://www.lovepik.com/',
category: 'banco',
function: 'Plataforma que oferece imagens, vetores e ilustrações de alta qualidade para projetos gráficos e digitais.',
applications: [
  'Baixar fotos e imagens de alta qualidade',
  'Acessar vetores e ilustrações prontas',
  'Usar recursos visuais para marketing e design',
  'Economizar tempo na criação de conteúdos visuais'
  ],
  videos: [
    {
      id: '1',
      title: 'Como Upar um Design no Lovepik',
      thumbnail: 'https://img.youtube.com/vi/qwgPjjXVTnk/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=qwgPjjXVTnk'
    },
    {
      id: '2',
      title: 'lovepik baixando arquivo',
      thumbnail: 'https://img.youtube.com/vi/OTMObxGrRlM/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=OTMObxGrRlM'
    },
    {
      id: '3',
      title: 'Criando conta no Lovepik',
      thumbnail: 'https://img.youtube.com/vi/_WKAsVqMWLI/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=_WKAsVqMWLI'
    }
  ],
  prompts: [
  { id: '1', title: 'Imagem corporativa', content: 'Encontre imagens de escritório moderno para site institucional.' },
  { id: '2', title: 'Ilustração para blog', content: 'Gere ilustração de tecnologia e inovação para artigo online.' },
  { id: '3', title: 'Banner publicitário', content: 'Encontre fotos e vetores para criar banner de campanha promocional.' }
],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  {
    id: '30',
    name: 'Iconscount',
description: 'Biblioteca de ícones de alta qualidade para projetos gráficos e web design.',
image: 'https://cdn-1.webcatalog.io/catalog/iconscout/iconscout-social-preview.png?v=1714774705865',
url: 'https://iconscount.com/',
category: 'banco',
function: 'Oferece ícones em diversos estilos e formatos prontos para uso em websites, aplicativos e materiais de design.',
applications: [
  'Baixar ícones vetoriais e PNG',
  'Personalizar ícones para projetos digitais',
  'Usar ícones em websites, apps e apresentações',
  'Acelerar criação de interfaces visuais'
  ],
  videos: [
    {
      id: '1',
      title: 'Truque para Baixar Qualquer Ícone SVG de Graça (Até os Pagos)',
      thumbnail: 'https://img.youtube.com/vi/FLBUDb6JUq4/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=FLBUDb6JUq4'
    },
    {
      id: '2',
      title: 'Tutorial do IconScout: como encontrar, personalizar e baixar ícones, ilustrações e muito mais',
      thumbnail: 'https://img.youtube.com/vi/yvyoqiXYGnE/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=yvyoqiXYGnE'
    },
    {
      id: '3',
      title: 'IconScout for Figma: Criando Designs',
      thumbnail: 'https://img.youtube.com/vi/XbZGGYCoVhk/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=XbZGGYCoVhk'
    }
  ],
  prompts: [
  { id: '1', title: 'Ícones de redes sociais', content: 'Encontre conjunto de ícones para Facebook, Instagram e LinkedIn.' },
  { id: '2', title: 'Interface de app', content: 'Gere ícones minimalistas para menu e botões de aplicativo mobile.' },
  { id: '3', title: 'Design de apresentação', content: 'Selecione ícones modernos para slides de apresentação corporativa.' }
],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  {
    id: '32',
    name: 'Flaticon',
description: 'Biblioteca de ícones vetoriais para web, apps e design gráfico.',
image: 'https://creatorwala.in/wp-content/uploads/2023/02/flaticon-8.png',
url: 'https://www.flaticon.com/',
category: 'banco',
function: 'Fornece milhares de ícones vetoriais em diversos formatos, facilitando a criação de interfaces e materiais visuais.',
applications: [
  'Baixar ícones em SVG, PNG e outros formatos',
  'Usar ícones em websites e apps',
  'Personalizar cores e tamanhos de ícones',
  'Acelerar a criação de design gráfico'
  ],
  videos: [
    {
      id: '1',
      title: 'O MELHOR SITE PARA ÍCONES: Flaticon',
      thumbnail: 'https://img.youtube.com/vi/W-A4b4-gSdk/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=W-A4b4-gSdk'
    },
    {
      id: '2',
      title: 'FLATICON - O banco de ícones gratuito que eu uso.',
      thumbnail: 'https://img.youtube.com/vi/pRlNS3fhHwU/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=pRlNS3fhHwU'
    },
    {
      id: '3',
      title: 'Como BAIXAR Ícones e em PNG no Flaticon',
      thumbnail: 'https://img.youtube.com/vi/yrzXzsATzq0/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=yrzXzsATzq0'
    }
  ],
  prompts: [
 { id: '1', title: 'Ícones minimalistas', content: 'Selecione ícones minimalistas para menu de aplicativo mobile.' },
  { id: '2', title: 'Ícones temáticos', content: 'Encontre conjunto de ícones sobre finanças e economia.' },
  { id: '3', title: 'Ícones para apresentação', content: 'Escolha ícones modernos para slides corporativos.' }
],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  {
    id: '33',
    name: 'Envato Elements',
description: 'Biblioteca de recursos digitais incluindo fotos, vídeos, templates, música e gráficos para criativos.',
image: 'https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/92c1faae-4f9e-4efd-ab56-0c1423bcf470.png?w=80&h=80&fit=max&dpr=3&auto=format&q=50',
url: 'https://elements.envato.com/',
category: 'banco',
function: 'Oferece recursos digitais de alta qualidade para design, marketing e produção audiovisual.',
applications: [
  'Baixar fotos, vídeos e templates',
  'Acessar elementos gráficos e ícones',
  'Usar recursos em projetos comerciais e pessoais',
  'Economizar tempo na criação de conteúdo visual'
  ],
  videos: [
    {
      id: '1',
      title: 'Envato Elements ainda vale a pena hoje em 2025??? ',
      thumbnail: 'https://img.youtube.com/vi/Ey9ONGRdSRw/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=Ey9ONGRdSRw'
    },
    {
      id: '2',
      title: 'Elements Envato | Como funciona? | o que é?',
      thumbnail: 'https://img.youtube.com/vi/UmdAahj-Kns/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=UmdAahj-Kns'
    },
    {
      id: '3',
      title: 'Envato Elements no Brasil',
      thumbnail: 'https://img.youtube.com/vi/Dp1IJlgPRvo/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=Dp1IJlgPRvo'
    }
  ],
  prompts: [
{ id: '1', title: 'Template de apresentação', content: 'Escolha template moderno para apresentação corporativa.' },
  { id: '2', title: 'Vídeo de marketing', content: 'Selecione clipes curtos e música para vídeo promocional.' },
  { id: '3', title: 'Gráfico animado', content: 'Gere gráficos animados para incluir em vídeo institucional.' }
],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  {
    id: '34',
    name: 'Adobe Stocks',
description: 'Banco de imagens, vídeos e templates profissionais para designers, fotógrafos e criativos.',
image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48DScgBuR4F4YSXbVa_eqN6TIjrd4thy-kA&s',
url: 'https://stock.adobe.com/',
category: 'banco',
function: 'Fornece imagens e vídeos de alta qualidade para uso comercial e criativo, integrando-se a softwares Adobe.',
applications: [
  'Buscar fotos, vetores e vídeos profissionais',
  'Integrar recursos a softwares Adobe como Photoshop e Premiere',
  'Criar projetos visuais de alta qualidade',
  'Economizar tempo na produção de conteúdo'
  ],
  videos: [
    {
      id: '1',
      title: 'Tentei vender imagens de IA no Adobe Stock por 1 ano e ganhei $',
      thumbnail: 'https://img.youtube.com/vi/d9prEsMLGc4/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=d9prEsMLGc4'
    },
    {
      id: '2',
      title: 'O que é o Adobe Stock e quais ativos são comercializados?',
      thumbnail: 'https://img.youtube.com/vi/dyCoSz7ePdY/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=dyCoSz7ePdY'
    },
    {
      id: '3',
      title: 'Como vender IMAGENS feitas com INTELIGÊNCIA ARTIFICIAL no Adobe Stock',
      thumbnail: 'https://img.youtube.com/vi/yhT82pEQumk/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=yhT82pEQumk'
    }
  ],
  prompts: [
{ id: '1', title: 'Imagem de marketing', content: 'Encontre fotos profissionais para campanha de redes sociais.' },
  { id: '2', title: 'Template de vídeo', content: 'Selecione template de vídeo moderno para promoção de produto.' },
  { id: '3', title: 'Ilustração vetorial', content: 'Escolha ilustração vetorial para apresentação corporativa.' }
],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  {
    id: '35',
    name: 'Freepik',
description: 'Banco de imagens, vetores, ícones e PSDs para uso em design gráfico e projetos digitais.',
image: 'https://play-lh.googleusercontent.com/ssrpBT94LnMy6mgyNbbEj_9SONp8h4lK8HWrN4qR67dyfwIjgNTYJZOSY4ZOL2yC60uY',
url: 'https://www.freepik.com/',
category: 'banco',
function: 'Disponibiliza recursos visuais para criação de materiais gráficos, posts, apresentações e projetos digitais.',
applications: [
  'Baixar vetores, fotos e PSDs',
  'Criar materiais gráficos profissionais rapidamente',
  'Usar recursos em projetos comerciais e pessoais',
  'Economizar tempo em design visual'
  ],
  videos: [
    {
      id: '1',
      title: 'Como Criar Ensaios Fotográficos com Inteligência Artificial do FreePik ',
      thumbnail: 'https://img.youtube.com/vi/ClHce7O4cIE/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=ClHce7O4cIE'
    },
    {
      id: '2',
      title: 'Como Gerar FOTOS PROFISSIONAIS Com IA do Freepik',
      thumbnail: 'https://img.youtube.com/vi/Shdyr-3QDCM/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=Shdyr-3QDCM'
    },
    {
      id: '3',
      title: 'INTELIGÊNCIA ARTIFICIAL: FREEPIK AI - Vale a pena?',
      thumbnail: 'https://img.youtube.com/vi/pV0-0e0-vNk/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=pV0-0e0-vNk'
    }
  ],
  prompts: [
{ id: '1', title: 'Vetores de marketing', content: 'Encontre vetores para campanha publicitária de produto.' },
  { id: '2', title: 'Ícones para app', content: 'Selecione ícones modernos para interface de aplicativo móvel.' },
  { id: '3', title: 'Ilustração para blog', content: 'Busque ilustrações relacionadas a tecnologia e inovação.' }
],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  {
    id: '36',
   name: 'Designi',
description: 'Biblioteca de recursos visuais (PSD, PNG, fotos, vetores, vídeos, mockups, 3D e motion) para acelerar projetos de design.',
image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFrhsBHX3jHQHkCcgyzJil8cbfCDtfIo8-jw&s',
url: 'https://www.designi.com.br/',
category: 'banco',
function: 'Plataforma com ampla coleção de arquivos editáveis e prontos para uso, organizada por tipos e coleções sazonais, com busca e filtros.',
applications: [
  'Encontrar PSDs editáveis para posts, flyers e materiais impressos',
  'Baixar PNGs recortados, fotos e vetores para campanhas',
  'Usar mockups e modelos 3D em apresentações e portfólios',
  'Aproveitar coleções temáticas por datas comemorativas e nichos'
  ],
  videos: [
    {
      id: '1',
      title: 'DESIGNI O SITE QUE TODO DESIGNER PRECISA CONHECER!',
      thumbnail: 'https://img.youtube.com/vi/RbqDh4rpiBU/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=RbqDh4rpiBU'
    },
    {
      id: '2',
      title: '[Review completo] site: designi.com.br - Melhor site para download de templates',
      thumbnail: 'https://img.youtube.com/vi/suArQf1hSA4/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=suArQf1hSA4'
    },
    {
      id: '3',
      title: 'SERÁ QUE VALE A PENA VIRAR CONTRIBUIDOR NA DESIGNI E BAIXAR DESIGN EM 2025?',
      thumbnail: 'https://img.youtube.com/vi/jMfuOjAKq9M/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=jMfuOjAKq9M'
    }
  ],
  prompts: [
{ id: '1', title: 'Campanha sazonal', content: 'Encontre PSDs e PNGs para campanha de Páscoa (posts, banners e flyers) com visual clean e moderno.' },
  { id: '2', title: 'Mockups de embalagem', content: 'Busque mockups de embalagem de alimentos (sachê, pote e caixa) para apresentação de redesign de marca.' },
  { id: '3', title: 'Banco de fotos corporativas', content: 'Selecione fotos de escritório moderno e equipe colaborando para blog e LinkedIn.' }
],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
    //Edição de Vídeo
  {
    id: '31',
    name: 'VEED.IO',
description: 'Editor de vídeos online com recursos de IA para legendas, cortes automáticos e efeitos visuais.',
image: 'https://images.seeklogo.com/logo-png/44/1/veed-logo-png_seeklogo-440584.png',
url: 'https://www.veed.io/',
category: 'edicao',
function: 'Permite editar vídeos diretamente no navegador, automatizando tarefas como legendas, cortes e efeitos, agilizando produção de conteúdo audiovisual.',
applications: [
  'Editar vídeos de forma online sem software pesado',
  'Adicionar legendas automáticas e traduzidas',
  'Aplicar efeitos visuais e filtros',
  'Criar vídeos para redes sociais e marketing'
  ],
  videos: [
    {
      id: '1',
      title: 'Como manter contato visual com esta ferramenta Veed IO',
      thumbnail: 'https://img.youtube.com/vi/a9s3VLc7Kg8/hqdefault.jpg',
      url: 'https://www.youtube.com/shorts/a9s3VLc7Kg8'
    },
    {
      id: '2',
      title: 'GUIA COMPLETA do VEED IO',
      thumbnail: 'https://img.youtube.com/vi/9r5_IKmeniU/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=9r5_IKmeniU'
    },
    {
      id: '3',
      title: 'VEED.IO - A a solução Online de Gravação e Edição de Vídeos',
      thumbnail: 'https://img.youtube.com/vi/Ty7RXS5GVMg/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=Ty7RXS5GVMg'
    }
  ],
  prompts: [
  { id: '1', title: 'Vídeo tutorial', content: 'Crie vídeo de 3 minutos explicando uso de ferramenta online, com legendas e narração.' },
  { id: '2', title: 'Vídeo promocional', content: 'Gere vídeo de 20 segundos para anúncio de produto, com texto animado e música de fundo.' },
  { id: '3', title: 'Corte de vídeo', content: 'Edite vídeo de palestra, cortando silêncios e ajustando ritmo de apresentação.' }
],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
    {
    id: '37',
   name: 'CAPCUT PRO',
description: 'Editor de vídeos profissional com IA para criar, cortar, animar e aplicar efeitos visuais rapidamente.',
image: 'https://hotmart.s3.amazonaws.com/product_pictures/a88895d6-86bd-406a-93c1-2ed6d3556645/CAPCUTPROzip11.png',
url: 'https://www.capcut.com/',
category: 'pro',
function: 'Ferramenta de edição de vídeo com recursos avançados de IA, permitindo criar conteúdos profissionais sem software complexo.',
applications: [
  'Editar vídeos com cortes automáticos e efeitos',
  'Adicionar textos, legendas e transições',
  'Criar vídeos para redes sociais e marketing',
  'Aplicar filtros e animações de forma rápida'
  ],
  videos: [
    {
      id: '1',
      title: 'CAPCUT PRO GRÁTIS: Desbloqueie TODOS os Recursos Premium do Capcut de Graça',
      thumbnail: 'https://img.youtube.com/vi/4e2YyZKnsbo/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=4e2YyZKnsbo'
    },
    {
      id: '2',
      title: 'GUIA COMPLETO: COMO EDITAR VÍDEOS DO ZERO pelo CELULAR | CAPCUT PARA INICIANTE',
      thumbnail: 'https://img.youtube.com/vi/wq4zBNYhVnM/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=wq4zBNYhVnM'
    },
    {
      id: '3',
      title: 'Como DOMINAR o Estilo de Edição que mais VIRALIZA pelo CELULAR! (Tutorial CapCut)',
      thumbnail: 'https://img.youtube.com/vi/qmIPXGzJe3w/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=qmIPXGzJe3w'
    }
  ],
  prompts: [
{ id: '1', title: 'Vídeo social', content: 'Crie vídeo curto para Instagram, com cortes rápidos e música de fundo.' },
  { id: '2', title: 'Tutorial animado', content: 'Gere vídeo tutorial de 2 minutos com animações e narração clara.' },
  { id: '3', title: 'Promoção de produto', content: 'Crie vídeo promocional de 15 segundos destacando características principais do produto.' }
],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
  {
  id: '44',
  name: 'Notion AI PRO',
  description: 'Assistente de escrita e produtividade integrado ao Notion',
  image: 'https://www.conversion.com.br/wp-content/uploads/2023/02/notion-ai.png',
  url: 'https://www.notion.so/product/ai',
  category: 'pro',
  function: 'Ferramenta que gera resumos, cria textos e organiza informações dentro do Notion.',
  applications: [
    'Criar resumos de reuniões automaticamente',
    'Gerar planejadores e listas de tarefas',
    'Escrever textos de estudo ou trabalho',
    'Organizar brainstorms de ideias'
  ],
  videos: [
    {
      id: '1',
      title: 'Notion 100% Gratis! É possível?',
      thumbnail: 'https://img.youtube.com/vi/cTXjOvZ7pwQ/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=cTXjOvZ7pwQ'
    },
    {
      id: '2',
      title: 'NOTION AI: FACILITE sua VIDA com a INTELIGÊNCIA ARTIFICIAL!',
      thumbnail: 'https://img.youtube.com/vi/PmAg5prBap0/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=PmAg5prBap0'
    },
    {
      id: '3',
      title: 'NOTION PRO DE GRAÇA PARA ESTUDANTES!',
      thumbnail: 'https://img.youtube.com/vi/7PqulEf9OHs/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=7PqulEf9OHs'
    }
  ],
  prompts: [
    { id: '1', title: 'Resumo de reunião', content: 'Resuma em tópicos claros os principais pontos desta reunião.' },
    { id: '2', title: 'Planner diário', content: 'Monte uma lista de tarefas organizada para o meu dia.' }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
{
  id: '45',
  name: 'Copy.ai PRO',
  description: 'IA focada em copywriting e textos de marketing',
  image: 'https://reply.io/wp-content/uploads/copy.ai_-1080x567.jpg',
  url: 'https://www.copy.ai',
  category: 'pro',
  function: 'Gera textos persuasivos, anúncios, posts e e-mails de forma automática.',
  applications: [
    'Criar anúncios para Facebook e Instagram',
    'Gerar posts prontos para redes sociais',
    'Escrever descrições de produto',
    'Criar e-mails de vendas em minutos'
  ],
  videos: [
    {
      id: '1',
      title: 'Ferramenta Criadora de Copys Infinitas Copy.ai',
      thumbnail: 'https://img.youtube.com/vi/rFtH5Ujo2Ik/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=rFtH5Ujo2Ik'
    },
    {
      id: '2',
      title: 'Copy.ai: Ferramenta CRIA Copy INFINITAS',
      thumbnail: 'https://img.youtube.com/vi/gxzVIvNV994/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=gxzVIvNV994'
    }
  ],
  prompts: [
    { id: '1', title: 'Anúncio Facebook', content: 'Crie 3 variações curtas de anúncio para vender [produto].' },
    { id: '2', title: 'Post Instagram', content: 'Escreva uma legenda curta e persuasiva para [tema].' }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
{
  id: '46',
  name: 'Descript PRO',
  description: 'Edição de áudio e vídeo baseada em texto',
  image: 'https://cdn.prod.website-files.com/634e7aa49f5b025e1fd9e87b/65203a32b6439e022d9f6653_61392ac3d9cf6c648ce5743f_CleanShot-2020-07-28-at-06.16.27%402x.png',
  url: 'https://www.descript.com',
  category: 'pro',
  function: 'Permite editar vídeos e áudios apenas editando o texto, além de clonar vozes.',
  applications: [
    'Editar podcasts de forma rápida',
    'Clonar voz para narrações',
    'Editar vídeos curtos para redes sociais',
    'Transformar vídeos em transcrições de texto'
  ],
  videos: [
    {
      id: '1',
      title: 'Como Colocar Legendas Perfeitas no seu Vídeo',
      thumbnail: 'https://img.youtube.com/vi/m63Wf8w6ROU/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=m63Wf8w6ROU&t=55s'
    },
    {
      id: '2',
      title: 'Como editar um VSL em 5 minutos: Utilizando a ferramenta Descript',
      thumbnail: 'https://img.youtube.com/vi/rIfU0u0RRMk/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=rIfU0u0RRMk'
    }
  ],
  prompts: [
    { id: '1', title: 'Cortar trechos', content: 'Remova automaticamente pausas e vícios de linguagem deste áudio.' },
    { id: '2', title: 'Transformar vídeo em artigo', content: 'Transcreva e resuma esse vídeo em formato de artigo.' }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
{
  id: '47',
  name: 'Pictory AI PRO',
  description: 'IA para transformar texto em vídeo com narração e legendas',
  image: 'https://media.cybernews.com/images/featured/2025/02/pictory-ai.jpg',
  url: 'https://pictory.ai',
  category: 'pro',
  function: 'Cria vídeos automáticos a partir de artigos, roteiros ou textos simples.',
  applications: [
    'Gerar vídeos automáticos para YouTube',
    'Criar anúncios em vídeo prontos',
    'Adicionar legendas automáticas',
    'Transformar artigos em vídeos curtos'
  ],
  videos: [
    {
      id: '1',
      title: '30 Dias Usando a Pictory AI: Valeu a Pena?',
      thumbnail: 'https://img.youtube.com/vi/gt76lxPNicM/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=gt76lxPNicM'
    },
    {
      id: '2',
      title: 'TRANSFORME QUALQUER TEXTO EM UM VÍDEO PROFISSIONAL',
      thumbnail: 'https://img.youtube.com/vi/BFp8uao6THc/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=BFp8uao6THc'
    },
    {
      id: '3',
      title: 'Inteligência Artificial Cria VSL em minutos!',
      thumbnail: 'https://img.youtube.com/vi/Qn07KQak_vg/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=Qn07KQak_vg'
    }
  ],
  prompts: [
    { id: '1', title: 'Vídeo para anúncio', content: 'Transforme esse texto em um vídeo de até 30 segundos com legendas.' },
    { id: '2', title: 'Resumo visual', content: 'Crie um vídeo com 5 cenas resumindo esse artigo.' }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
},
{
  id: '48',
  name: 'Remove.bg PRO',
  description: 'Remoção automática de fundo de imagens',
  image: 'https://snapbg.ai/preview.jpg',
  url: 'https://remove.bg',
  category: 'pro',
  function: 'Remove fundos de imagens em segundos com qualidade profissional.',
  applications: [
    'Criar fotos de produto para e-commerce',
    'Editar imagens para redes sociais',
    'Produzir materiais de marketing',
    'Transformar fotos em PNGs transparentes'
  ],
  videos: [
    {
      id: '1',
      title: 'COMO REMOVER O FUNDO DE UMA FOTO DE FORMA SIMPLES',
      thumbnail: 'https://img.youtube.com/vi/VisP78ii5S4/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=VisP78ii5S4'
    },
    {
      id: '2',
      title: 'COMO REMOVER O FUNDO DE IMAGEM | 4 Sites Gratuitos',
      thumbnail: 'https://img.youtube.com/vi/732f16D9zxY/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=732f16D9zxY'
    }
  ],
  prompts: [
    { id: '1', title: 'Foto de produto', content: 'Remova o fundo desta imagem deixando apenas o produto em destaque.' },
    { id: '2', title: 'Montagem social media', content: 'Recorte a pessoa em PNG para usar em um post com fundo personalizado.' }
  ],
  freeAccessVideo: 'https://www.youtube.com/watch?v=Th6yAKgGbVk'
} 
];