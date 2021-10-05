export default function ProdutoHome(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({
            caracteristicas: [
                'Bicicleta Scott Spark 930',
                'Grupo GX 1x12 cassete 10/50 Suspensão Fox Guidão de carbono',
                'Permite uma pilotagem mais agressiva devido a sua aerodinâmica;',
                '90% feita de alumínio',
                'Sistema de Câmbios Ultraresistentes',
                '12.300'
            ]
        });
    } else {
        res.status(405).send();
    }
}