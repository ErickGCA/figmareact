import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Tab, Tabs } from "react-bootstrap";

function AddEditModal({ show, handleClose, title, item, onSave }) {
  const [formData, setFormData] = useState({
    id: "",
    username: "",
    nis: "",
    cpf: "",
    endereco: "",
    telefone: "",
    mes: "",
    familiasPAIF: 0,
    novasFamiliasPAIF: 0,
    familiasExtremaPobreza: 0,
    bolsaFamilia: 0,
    // Adicionar os campos adicionais aqui...
  });
  const [activeTab, setActiveTab] = useState("basics");

  useEffect(() => {
    if (item) {
      setFormData({
        id: item.id || "",
        username: item.username || "",
        nis: item.nis || "",
        cpf: item.cpf || "",
        endereco: item.endereco || "",
        telefone: item.telefone || "",
        mes: item.mes || "",
        familiasPAIF: item.familiasPAIF || 0,
        novasFamiliasPAIF: item.novasFamiliasPAIF || 0,
        familiasExtremaPobreza: item.familiasExtremaPobreza || 0,
        bolsaFamilia: item.bolsaFamilia || 0,
        descumprimentoCondicionalidades:
          item.descumprimentoCondicionalidades || 0,
        bpc: item.bpc || 0,
        trabalhoInfantil: item.trabalhoInfantil || 0,
        acolhimento: item.acolhimento || 0,
        atendimentosCRAS: item.atendimentosCRAS || 0,
        cadastroUnico: item.cadastroUnico || 0,
        atualizacaoCadastral: item.atualizacaoCadastral || 0,
        bpcIndividuos: item.bpcIndividuos || 0,
        creas: item.creas || 0,
        visitasDomiciliares: item.visitasDomiciliares || 0,
        auxiliosNatalidade: item.auxiliosNatalidade || 0,
        auxiliosFuneral: item.auxiliosFuneral || 0,
        outrosBeneficios: item.outrosBeneficios || 0,
        atendimentosColetivos: item.atendimentosColetivos || 0,
        familiasParticipantesPAIF: item.familiasParticipantesPAIF || 0,
        criancas06SCFV: item.criancas06SCFV || 0,
        criancas714SCFV: item.criancas714SCFV || 0,
        adolescentes1517SCFV: item.adolescentes1517SCFV || 0,
        adultosSCFV: item.adultosSCFV || 0,
        idososSCFV: item.idososSCFV || 0,
        palestrasOficinas: item.palestrasOficinas || 0,
        pessoasDeficiencia: item.pessoasDeficiencia || 0,
        // Continuar preenchendo os campos adicionais conforme necessário...
      });
    }
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
          className="mb-3"
        >
          <Tab eventKey="basics" title="Informações Básicas">
            <Form>
              <Form.Group controlId="formUsername">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formNis">
                <Form.Label>NIS</Form.Label>
                <Form.Control
                  type="text"
                  name="nis"
                  value={formData.nis}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formCpf">
                <Form.Label>CPF</Form.Label>
                <Form.Control
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formEndereco">
                <Form.Label>Endereço</Form.Label>
                <Form.Control
                  type="text"
                  name="endereco"
                  value={formData.endereco}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formTelefone">
                <Form.Label>Telefone</Form.Label>
                <Form.Control
                  type="text"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Tab>
          <Tab eventKey="additional" title="Informações Adicionais">
            <Form>
              <Form.Group controlId="formMes">
                <Form.Label>Mês</Form.Label>
                <Form.Control
                  type="text"
                  name="mes"
                  value={formData.mes}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formFamiliasPAIF">
                <Form.Label>Famílias PAIF</Form.Label>
                <Form.Control
                  type="number"
                  name="familiasPAIF"
                  value={formData.familiasPAIF}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formNovasFamiliasPAIF">
                <Form.Label>Novas Famílias PAIF</Form.Label>
                <Form.Control
                  type="number"
                  name="novasFamiliasPAIF"
                  value={formData.novasFamiliasPAIF}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formFamiliasExtremaPobreza">
                <Form.Label>Famílias em Extrema Pobreza</Form.Label>
                <Form.Control
                  type="number"
                  name="familiasExtremaPobreza"
                  value={formData.familiasExtremaPobreza}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBolsaFamilia">
                <Form.Label>Bolsa Família</Form.Label>
                <Form.Control
                  type="number"
                  name="bolsaFamilia"
                  value={formData.bolsaFamilia}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formDescumprimentoCondicionalidades">
                <Form.Label>Descumprimento de Condicionalidades</Form.Label>
                <Form.Control
                  type="number"
                  name="descumprimentoCondicionalidades"
                  value={formData.descumprimentoCondicionalidades}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBpc">
                <Form.Label>BPC</Form.Label>
                <Form.Control
                  type="number"
                  name="bpc"
                  value={formData.bpc}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formTrabalhoInfantil">
                <Form.Label>Trabalho Infantil</Form.Label>
                <Form.Control
                  type="number"
                  name="trabalhoInfantil"
                  value={formData.trabalhoInfantil}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formAcolhimento">
                <Form.Label>Acolhimento</Form.Label>
                <Form.Control
                  type="number"
                  name="acolhimento"
                  value={formData.acolhimento}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formAtendimentosCRAS">
                <Form.Label>Atendimentos CRAS</Form.Label>
                <Form.Control
                  type="number"
                  name="atendimentosCRAS"
                  value={formData.atendimentosCRAS}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formCadastroUnico">
                <Form.Label>Cadastro Único</Form.Label>
                <Form.Control
                  type="number"
                  name="cadastroUnico"
                  value={formData.cadastroUnico}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formAtualizacaoCadastral">
                <Form.Label>Atualização Cadastral</Form.Label>
                <Form.Control
                  type="number"
                  name="atualizacaoCadastral"
                  value={formData.atualizacaoCadastral}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBpcIndividuos">
                <Form.Label>BPC para Indivíduos</Form.Label>
                <Form.Control
                  type="number"
                  name="bpcIndividuos"
                  value={formData.bpcIndividuos}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formCreas">
                <Form.Label>CREAS</Form.Label>
                <Form.Control
                  type="number"
                  name="creas"
                  value={formData.creas}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formVisitasDomiciliares">
                <Form.Label>Visitas Domiciliares</Form.Label>
                <Form.Control
                  type="number"
                  name="visitasDomiciliares"
                  value={formData.visitasDomiciliares}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formAuxiliosNatalidade">
                <Form.Label>Auxílios Natalidade</Form.Label>
                <Form.Control
                  type="number"
                  name="auxiliosNatalidade"
                  value={formData.auxiliosNatalidade}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formAuxiliosFuneral">
                <Form.Label>Auxílios Funeral</Form.Label>
                <Form.Control
                  type="number"
                  name="auxiliosFuneral"
                  value={formData.auxiliosFuneral}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formOutrosBeneficios">
                <Form.Label>Outros Benefícios</Form.Label>
                <Form.Control
                  type="number"
                  name="outrosBeneficios"
                  value={formData.outrosBeneficios}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formAtendimentosColetivos">
                <Form.Label>Atendimentos Coletivos</Form.Label>
                <Form.Control
                  type="number"
                  name="atendimentosColetivos"
                  value={formData.atendimentosColetivos}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formFamiliasParticipantesPAIF">
                <Form.Label>Famílias Participantes PAIF</Form.Label>
                <Form.Control
                  type="number"
                  name="familiasParticipantesPAIF"
                  value={formData.familiasParticipantesPAIF}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formCriancas06SCFV">
                <Form.Label>Crianças 0-6 SCFV</Form.Label>
                <Form.Control
                  type="number"
                  name="criancas06SCFV"
                  value={formData.criancas06SCFV}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formCriancas714SCFV">
                <Form.Label>Crianças 7-14 SCFV</Form.Label>
                <Form.Control
                  type="number"
                  name="criancas714SCFV"
                  value={formData.criancas714SCFV}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formAdolescentes1517SCFV">
                <Form.Label>Adolescentes 15-17 SCFV</Form.Label>
                <Form.Control
                  type="number"
                  name="adolescentes1517SCFV"
                  value={formData.adolescentes1517SCFV}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formAdultosSCFV">
                <Form.Label>Adultos SCFV</Form.Label>
                <Form.Control
                  type="number"
                  name="adultosSCFV"
                  value={formData.adultosSCFV}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formIdososSCFV">
                <Form.Label>Idosos SCFV</Form.Label>
                <Form.Control
                  type="number"
                  name="idososSCFV"
                  value={formData.idososSCFV}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formPalestrasOficinas">
                <Form.Label>Palestras e Oficinas</Form.Label>
                <Form.Control
                  type="number"
                  name="palestrasOficinas"
                  value={formData.palestrasOficinas}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formPessoasDeficiencia">
                <Form.Label>Pessoas com Deficiência</Form.Label>
                <Form.Control
                  type="number"
                  name="pessoasDeficiencia"
                  value={formData.pessoasDeficiencia}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddEditModal;
