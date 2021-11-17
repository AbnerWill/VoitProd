import { Container, Table } from 'react-bootstrap'
import Styles from './styles.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import { ModalCadastro } from '../ModalEndereco'
import { CustomCheckbox } from '../CustomCheckbox'
import { ModalCartaoCredito } from '../ModalCartaoCredito'
import InputMask from 'react-input-mask'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import api from '../../services/api'
import { Spinner } from 'react-bootstrap'
import { mascaraCPF } from '../../utils/mascaraCPF'
import { mascaraCelular } from '../../utils/mascaraCelular'
import { mascaraCep } from '../../utils/mascaraCep'
import { CustomField } from '../../components/CustomField'
import { CustomDropdown } from '../CustomDropdown'

export function PedidoInterna(): JSX.Element {
  const [formEnviado, setFormEnviado] = useState<boolean>(false)
  const [mensagemErro, setMensagemErro] = useState<string[]>([''])
  const [loading, setLoading] = useState<boolean>(false)
  const [estado, setEstado] = useState('Pedidos')
  const [nome, setNome] = useState('')
  const [data, setData] = useState('')
  const [cpf, setCpf] = useState('')
  const [genero, setGenero] = useState('')
  const [telefone, setTelefone] = useState('')
  const [dadosAcesso, setDadosAcesso] = useState('')
  const [senha, setSenha] = useState('')
  const [novaSenha, setNovaSenha] = useState('')
  const [nomeLoja, setNomeLoja] = useState('')
  const [razaoSocial, setrazaoSocial] = useState('')

  function Conteudo() {
    switch (estado) {
      case 'Pedidos':
        return <Pedidos />

      case 'Meus Dados':
        return <MeusDados />

      case 'Cartões Salvos':
        return <MeusCartoes />

      case 'Meus Anúncios':
        return <MeusPedidos />

      case 'Cadastro Loja':
        return <CadastroLoja />

      default:
        return <h1>Não encontrado</h1>
    }
  }

  interface DadosCadastroLoja {
    nome_fantasia: string
    razao_social: string
    cep: string
    cpf: string
    telefone: string
    rua: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    email: string
    uf: string
  }
  const regexCpf = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/
  const regexCep = 	/^\d{5}-\d{3}$/

  const schema = Yup.object().shape({
    nome_fantasia: Yup.string().required('Este campo é obrigatório'),
    razao_social: Yup.string().required('Este campo é obrigatório'),
    cpf: Yup.string()
    .max(14)
    .matches(regexCpf, 'Digite um CPF do tipo XXX.XXX.XXX-XX')
    .required('Este campo é obrigatório'),
    cep: Yup.string()
    .max(9)
    .required('Digite um CEP')
    .matches(regexCep, 'Digite um CEP válido'),
    rua: Yup.string().required('Este campo é obrigatório'),
    numero: Yup.string().required('Digite o número'),
    telefone: Yup.string()
    .min(13, 'Digite o numero completo')
    .required('Este campo é obrigatório'),
    bairro: Yup.string().required('Este campo é obrigatório'),
    cidade: Yup.string().required('Este campo é obrigatório'),
    uf: Yup.string().required('Este campo é obrigatório'),
    email: Yup.string()
      .email('Digite um email válido')
      .required('Este campo é obrigatório')
  })

  async function onSubmit(dados: DadosCadastroLoja) {
    try {
      setMensagemErro([''])
      setLoading(true)
      const response = await api.post('/loja', dados)
      setLoading(false)

    } catch (error) {
      setLoading(false)
      setMensagemErro([
        ...mensagemErro
      ])
      console.log(mensagemErro)
    }
  }

  const Pedidos = () => {
    return (
      <div className={`${Styles.divPedidos} col-12 col-md-10`}>
        <p className={Styles.pedidos}>Pedidos</p>
        <div className={Styles.divProgresso}>
          <div className={Styles.descricaoVendido}>
            <div className={Styles.divProdutoVendido}>
              <Image
                src="/img-padrao.svg"
                alt="imagem produto vendido"
                width={60}
                height={60}
              />
            </div>
            <div className="d-flex flex-column justify-content-around text-center text-lg-start">
              <span className={Styles.produto}>
                Tênis Nike Downshifter 11 Masc. com várias cores
              </span>
              <span className={Styles.vendidoPor}>
                Vendido por: <span>Voit</span>
              </span>
              <span className={Styles.tamanho}>
                Tamanho: <span>40</span>
              </span>
              <span className={Styles.cor}>
                Cores: <span>Branco + Preto</span>
              </span>
            </div>
          </div>
          <div
            className={`${Styles.divProgressoProduto} mt-5 mb-5 mt-lg-0 mb-lg-0`}
          >
            <div className={Styles.divStatus}>
              <span className={`${Styles.divSubStatus}`}>
                <span className={`${Styles.imgStatus} ativo`}>
                  <Image
                    src="/img-padrao.svg"
                    alt="imagem produto"
                    width={50}
                    height={50}
                  />
                </span>
                <span className={Styles.pedido}>Pedido</span>
                <span className={Styles.pedido}>Realizado</span>
                <span className={Styles.pedido}>13/08/21</span>
              </span>
            </div>
            <div className={Styles.divStatus}>
              <span className={`${Styles.divSubStatus}`}>
                <span className={`${Styles.imgStatus} ativo`}>
                  <Image
                    src="/img-padrao.svg"
                    alt="imagem produto"
                    width={50}
                    height={50}
                  />
                </span>
                <span className={Styles.pedido}>Aguardando</span>
                <span className={Styles.pedido}>Pagamento</span>
              </span>
            </div>
            <div className={Styles.divStatus}>
              <span className={`${Styles.divSubStatus}`}>
                <span className={`${Styles.imgStatus} ativo`}>
                  <Image
                    src="/img-padrao.svg"
                    alt="imagem produto"
                    width={50}
                    height={50}
                  />
                </span>
                <span className={Styles.pedido}>Em</span>
                <span className={Styles.pedido}>Separação</span>
              </span>
            </div>
            <div className={Styles.divStatus}>
              <span className={`${Styles.divSubStatus}`}>
                <span className={`${Styles.imgStatus} ativo`}>
                  <Image
                    src="/img-padrao.svg"
                    alt="imagem produto"
                    width={50}
                    height={50}
                  />
                </span>
                <span className={Styles.pedido}>Em</span>
                <span className={Styles.pedido}>Transporte</span>
              </span>
            </div>
            <div className={Styles.divStatus}>
              <span className={`${Styles.divSubStatus}`}>
                <span className={`${Styles.imgStatus} ativo`}>
                  <Image
                    src="/img-padrao.svg"
                    alt="imagem produto"
                    width={50}
                    height={50}
                  />
                </span>
                <span className={Styles.pedido}>Pedido</span>
                <span className={Styles.pedido}>Entregue</span>
              </span>
            </div>
          </div>
          <div className={Styles.resumoCompra}>
            <p className={Styles.tituloResumo}>Resumo da compra</p>
            <span className={Styles.numeroPedido}>Pedido: 77</span>
            <span className={Styles.dataPedido}>Data do Pedido: 13/08/21</span>
            <span className={Styles.valorTotal}>Valor total: R$ 200,00</span>
          </div>
        </div>
      </div>
    )
  }

  const MeusDados = () => {
    return (
      <div className={`${Styles.divPedidos} col-12 col-md-10`}>
        <div className={Styles.divInputs}>
          <div className="row">
            <div className={`${Styles.inputsForm} col-12 col-sm-5`}>
              <label htmlFor="nome">Nome Completo</label>
              <input
                type="text"
                id="nome"
                placeholder="Nome Completo"
                onBlur={evt => setNome(evt.target.value)}
              />
              <label htmlFor="dataNascimento">Data Nascimento</label>
              <input
                type="text"
                id="dataNascimento"
                placeholder="Data Nascimento"
              />
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" placeholder="CPF" />
              <div className={Styles.divRadio}>
                <input type="radio" id="masculino" />
                <label htmlFor="masculino">Masculino</label>
                <input type="radio" id="feminino" />
                <label htmlFor="feminino">Feminino</label>
              </div>
              <label htmlFor="telefone">Telefone</label>
              <input type="text" placeholder="Telefone" />
            </div>
            <div className={`${Styles.divSeparador} col-1`}></div>
            <div className={`${Styles.inputsForm} col-12 col-sm-6`}>
              <label htmlFor="acesso">Dados de Acesso</label>
              <input type="text" id="acesso" placeholder="Dados de Acesso" />
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" placeholder="Senha" />
              <label htmlFor="novaSenha">Nova Senha</label>
              <input type="password" id="novaSenha" placeholder="Nova Senha" />
              <p className={Styles.checkboxTexto}>Preferências</p>
              <div className="d-flex align-items-center ">
                <input
                  type="checkbox"
                  id="checkbox1"
                  className={Styles.checkboxPreferencias}
                />
                <label htmlFor="checkbox1">
                  Quero receber por e-mail ofertas e novidades
                </label>
              </div>
              <div className="d-flex align-items-center ">
                <input
                  type="checkbox"
                  id="checkbox2"
                  className={Styles.checkboxPreferencias}
                />
                <label htmlFor="checkbox2">
                  Quero receber notificações dos meus pedidos por SMS
                </label>
              </div>
            </div>
          </div>
        </div>
        <p className={Styles.titulo}>Endereço</p>
        <div className={`${Styles.divInputs} mt-5`}>
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4">
              <div className={Styles.divEndereco}>
                <p className={Styles.nome}>Nome da pessoa</p>
                <div className={Styles.endereco}>
                  <span>Rua Santos Mauro, 468</span>
                  <span>Centro - Ponta Grossa - PR</span>
                  <span>CEP: 84063-160</span>
                  <div className="d-flex justify-content-end">
                    <i className="fas fa-pen me-2">
                      <span>Alterar</span>
                    </i>
                    <i className="fas fa-trash me-2 ">
                      <span>Excluir</span>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ModalCadastro />
        </div>
      </div>
    )
  }

  const MeusCartoes = () => {
    return (
      <div className={`${Styles.divPedidos} col-12 col-md-10`}>
        <p className={Styles.titulo}>Meus Cartões</p>
        <div className={`${Styles.divInputs} mt-5`}>
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4">
              <div className={Styles.divEndereco}>
                <img src="/master-card.svg" alt="bandeira cartão" />
                <div className={Styles.endereco}>
                  <p className={Styles.nome}>MasterCard ****0099</p>
                  <span>Nome da pessoa</span>
                  <span>Validade 09/25</span>
                  <div className="d-flex justify-content-end">
                    <i className="fas fa-trash">
                      <span>Excluir</span>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ModalCartaoCredito />
          </div>
        </div>
      </div>
    )
  }

  const MeusPedidos = () => {
    return (
      <div className={`${Styles.divPedidos} col-12 col-md-10`}>
        <div className="d-flex justify-content-between align-items-center">
          <span className={`${Styles.titulo}`}>Meus anúncios</span>
          <button className={`${Styles.btnEndereco} mb-5`}>
            adicionar produto
          </button>
        </div>
        <Table striped>
          <tbody>
            <tr>
              <th className={Styles.tituloTabela}>Foto</th>
              <th className={Styles.tituloTabela}>Título</th>
              <th className={Styles.tituloTabela}>Preço</th>
              <th className={Styles.tituloTabela}>Qtda</th>
              <th className={Styles.tituloTabela}>Ação</th>
              <th className={Styles.tituloTabela}>Views</th>
              <th className={Styles.tituloTabela}>Status</th>
            </tr>
            <tr>
              <td className={Styles.descricaoTabela}>
                <div className={Styles.divImgTabela}>
                  <img
                    className={Styles.imgTabela}
                    src="/img-padrao.svg"
                    alt=""
                  />
                </div>
              </td>
              <td className={Styles.descricaoTabela}>
                Título do anúncio do seu produto
              </td>
              <td className={Styles.descricaoTabela}>R$ 300,00</td>
              <td className={Styles.descricaoTabela}>03</td>
              <td className={Styles.descricaoTabela}>
                <div>
                  <i className="fas fa-pen me-2">
                    <a>Editar</a>
                  </i>
                </div>
                <div>
                  <i className="fas fa-trash me-2 ">
                    <a>Excluir</a>
                  </i>
                </div>
              </td>
              <td className={Styles.descricaoTabela}>00</td>
              <td className={Styles.descricaoTabela}>Pendente</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }

  const CadastroLoja = () => {

    return (
      <Formik
      validationSchema={schema}
      validateOnBlur
      initialValues={{
        nome_fantasia: '',
        razao_social: '',
        cep: '',
        cpf: '',
        telefone: '',
        rua: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        email: '',
        uf: ''
      }}
      onSubmit={values => onSubmit(values)}
      >
            {({ values, dirty, errors }) => (
            <div className={`${Styles.divPedidos} col-12 col-md-10`}>
              <Form>

                <div className={Styles.divInputs}>
                  <div className="row">
                      <div className={`${Styles.inputsForm} col-12 col-sm-5`}>
                          <CustomField
                            type="text"
                            name="nome_fantasia"
                            label="Nome Fantasia*"
                            dirty={dirty}
                          />
                          <CustomField
                            type="text"
                            name="razao_social"
                            label="Razão Social*"
                            dirty={dirty}
                          />
                          <CustomField
                            type="text"
                            name="cpf"
                            label="CPF*"
                            maxLength={14}
                            value={mascaraCPF(values.cpf)}
                            dirty={dirty}
                          />
                          <CustomField
                            type="text"
                            name="cep"
                            label="CEP*"
                            maxLength={9}
                            value={mascaraCep(values.cep)}
                            dirty={dirty}
                          />
                          <CustomField
                            type="text"
                            name="rua"
                            label="Rua*"
                            dirty={dirty}
                          />
                          <CustomField
                            type="number"
                            name="numero"
                            label="Número*"
                            dirty={dirty}
                          />
                          <CustomField
                            type="phone"
                            name="telefone"
                            label="Telefone"
                            value={mascaraCelular(values.telefone)}
                            maxLength={14}
                            dirty={dirty}
                          />
                      </div>
                      <div className={`${Styles.divSeparador} col-1`}></div>
                      <div className={`${Styles.inputsForm} col-12 col-sm-5`}>
                          <CustomField
                            type="text"
                            name="complemento"
                            label="Complemento"
                            dirty={dirty}
                          />
                          <CustomField
                            type="text"
                            name="bairro"
                            label="Bairro*"
                            dirty={dirty}
                          />
                          <CustomField
                            type="text"
                            name="cidade"
                            label="Cidade*"
                            dirty={dirty}
                          />
                          <CustomDropdown
                            contenttype="strings"
                            label="UF*"
                            name="uf"
                            array={['AC', 'AL' , 'AP' , 'AM' , 'BA' , 'CE' , 'DF' , 'ES' , 'GO' , 'MA' , 'MS' , 'MT' , 'MG' , 'PA' , 'PB' , 'PR' , 'PE' , 'PI' , 'RJ' , 'RN' , 'RS' , 'RO' , 'RR' , 'SC' , 'SP' , 'SE' , 'TO']}
                          />
                          <CustomField
                            type="email"
                            name="email"
                            label="Email*"
                            dirty={dirty}
                          />
                        <button type="submit" className={`${Styles.btnEndereco} mb-5`} >
                          {loading ? (
                            <Spinner animation="border">
                              <span className="visually-hidden">Loading...</span>
                            </Spinner>
                          ) : (
                            <span>Cadastrar Loja</span>
                          )}
                        </button>
                      </div>  
                  </div>
                </div>  
              </Form> 
            </div>   
            )}                  
      </Formik>
    )
  }

  return (
    <div>
      <Container>
        <div className={Styles.divImg}>
          <Image
            src="/img-padrao.svg"
            alt="imagem padrao"
            width={100}
            height={80}
          />
        </div>
        <div className="row">
          <div className={`${Styles.divLinks} col-12 col-md-2`}>
            <a
              href="#"
              className={Styles.links}
              onClick={() => setEstado('Pedidos')}
            >
              Pedidos
            </a>
            <hr className={Styles.separadorLinks} />
            <a
              href="#"
              className={Styles.links}
              onClick={() => setEstado('Meus Dados')}
            >
              Meus Dados
            </a>
            <hr className={Styles.separadorLinks} />
            <a
              href="#"
              className={Styles.links}
              onClick={() => setEstado('Cartões Salvos')}
            >
              Cartões Salvos
            </a>
            <hr className={Styles.separadorLinks} />
            <a
              href="#"
              className={Styles.links}
              onClick={() => setEstado('Meus Anúncios')}
            >
              Meus Anúncios
            </a>
            <hr className={Styles.separadorLinks} />
            <a
              href="#"
              className={Styles.links}
              onClick={() => setEstado('Cadastro Loja')}
            >
              Cadastro Loja
            </a>
            <hr className={Styles.separadorLinks} />
            <a href="#" className={Styles.links}>
              Sair
            </a>
          </div>
          <Conteudo />
        </div>
      </Container>
    </div>
  )
}
