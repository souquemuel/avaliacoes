"""Converte imagens geradas (ex.: 1536x1024 PNG) nas capas do site.

Uso:  python3 scripts/otimizar-capas.py <imagem.png> <nome-da-capa> [foco 0-1]
Gera em public/capas/: <nome>.webp (1536x864), <nome>-768.webp e <nome>-og.jpg (1200x630).
Depois, no frontmatter do artigo: capa: <nome>  e  capaAlt: "descrição da imagem".
O "foco" escolhe a altura do recorte 16:9 (0 = topo, 0.5 = centro, 1 = base).
"""
import sys
from PIL import Image

origem, nome = sys.argv[1], sys.argv[2]
foco = float(sys.argv[3]) if len(sys.argv) > 3 else 0.5
im = Image.open(origem).convert('RGB')
W, H = im.size

def recorte(proporcao):
    h = round(W * proporcao)
    topo = round((H - h) * foco)
    return im.crop((0, topo, W, topo + h))

c = recorte(9 / 16)
for largura, sufixo in ((1536, ''), (768, '-768')):
    c.resize((largura, round(largura * 9 / 16)), Image.LANCZOS).save(f'public/capas/{nome}{sufixo}.webp', 'WEBP', quality=80, method=6)
recorte(630 / 1200).resize((1200, 630), Image.LANCZOS).save(f'public/capas/{nome}-og.jpg', 'JPEG', quality=82, optimize=True, progressive=True)
print('Capas geradas em public/capas/ para', nome)
