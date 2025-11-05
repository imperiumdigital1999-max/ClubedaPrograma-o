import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'texto',
    name: 'Texto',
    description: 'Ferramentas para geração e edição de conteúdo textual',
    icon: 'FileText',
    color: 'from-orange-500 to-red-500',
    toolCount: 12
  },
  {
    id: 'imagem',
    name: 'Imagem',
    description: 'Criação e edição de imagens com IA',
    icon: 'Image',
    color: 'from-cyan-500 to-blue-500',
    toolCount: 8
  },
  {
    id: 'voz',
    name: 'Voz',
    description: 'Síntese e processamento de áudio',
    icon: 'Mic',
    color: 'from-purple-500 to-pink-500',
    toolCount: 6
  },
  {
    id: 'video',
    name: 'Vídeo',
    description: 'Geração e edição de vídeos',
    icon: 'Video',
    color: 'from-green-500 to-emerald-500',
    toolCount: 5
  },
  {
    id: 'automacao',
    name: 'Automação',
    description: 'Workflows e processos automatizados',
    icon: 'Zap',
    color: 'from-yellow-500 to-orange-500',
    toolCount: 10
  },
  {
    id: 'codigo',
    name: 'Código',
    description: 'Assistentes de programação',
    icon: 'Code',
    color: 'from-indigo-500 to-purple-500',
    toolCount: 7
  },
{
    id: 'banco',
    name: 'Banco de Imagens',
    description: 'Principais bancos de dados de imagens',
    icon: 'Image',
    color: 'from-indigo-500 to-purple-500',
    toolCount: 1
  }
];