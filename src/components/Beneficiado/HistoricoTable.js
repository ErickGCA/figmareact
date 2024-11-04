import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "./GerenciarBeneficiado.module.css";

function HistoricoTable({ data, onEdit, onDelete }) {
  const [showAdditionalInfoModal, setShowAdditionalInfoModal] = useState(false);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);

  const handleShowAdditionalInfo = (beneficiary) => {
    setSelectedBeneficiary(beneficiary);
    setShowAdditionalInfoModal(true);
  };

  const handleCloseAdditionalInfo = () => {
    setShowAdditionalInfoModal(false);
    setSelectedBeneficiary(null);
  };

  return (
    <>
      <table className={styles.historicoTable}>
        <thead>
          <tr>
            <th>Beneficiário</th>
            <th>NIS</th>
            <th>CPF</th>
            <th>Endereço</th>
            <th>Telefone</th>
            <th>Filiado</th>
            <th>Adicionais</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.username}</td>
              <td>{item.nis}</td>
              <td>{item.cpf}</td>
              <td>{item.endereco}</td>
              <td>{item.telefone}</td>
              <td>{item.filiado}</td>
              <td>
                <Button
                  variant="link"
                  className={styles.additionalInfoButton}
                  onClick={() => handleShowAdditionalInfo(item)}
                >
                  Ver detalhes
                </Button>
              </td>
              <td>
                <Button
                  className={`${styles.actionButton} ${styles.editButton}`}
                  onClick={() => onEdit(item)}
                >
                  Editar
                </Button>
                <Button
                  className={`${styles.actionButton} ${styles.deleteButton}`}
                  onClick={() => onDelete(item)}
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal para exibir informações adicionais */}
      <Modal show={showAdditionalInfoModal} onHide={handleCloseAdditionalInfo}>
        <Modal.Header closeButton>
          <Modal.Title>Informações Adicionais</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBeneficiary ? (
            <div>
              <p>
                <strong>Mes:</strong> {selectedBeneficiary.mes}
              </p>
              <p>
                <strong>Famílias PAIF:</strong>{" "}
                {selectedBeneficiary.familiasPAIF}
              </p>
              <p>
                <strong>Novas Famílias PAIF:</strong>{" "}
                {selectedBeneficiary.novasFamiliasPAIF}
              </p>
              <p>
                <strong>Famílias Extrema Pobreza:</strong>{" "}
                {selectedBeneficiary.familiasExtremaPobreza}
              </p>
              <p>
                <strong>Bolsa Família:</strong>{" "}
                {selectedBeneficiary.bolsaFamilia}
              </p>
              <p>
                <strong>Descumprimento de Condicionalidades:</strong>{" "}
                {selectedBeneficiary.descumprimentoCondicionalidades}
              </p>
              <p>
                <strong>BPC:</strong> {selectedBeneficiary.bpc}
              </p>
              <p>
                <strong>Trabalho Infantil:</strong>{" "}
                {selectedBeneficiary.trabalhoInfantil}
              </p>
              <p>
                <strong>Acolhimento:</strong> {selectedBeneficiary.acolhimento}
              </p>
              <p>
                <strong>Atendimentos CRAS:</strong>{" "}
                {selectedBeneficiary.atendimentosCRAS}
              </p>
              <p>
                <strong>Cadastro Único:</strong>{" "}
                {selectedBeneficiary.cadastroUnico}
              </p>
              <p>
                <strong>Atualização Cadastral:</strong>{" "}
                {selectedBeneficiary.atualizacaoCadastral}
              </p>
              <p>
                <strong>BPC Individuos:</strong>{" "}
                {selectedBeneficiary.bpcIndividuos}
              </p>
              <p>
                <strong>CREAS:</strong> {selectedBeneficiary.creas}
              </p>
              <p>
                <strong>Visitas Domiciliares:</strong>{" "}
                {selectedBeneficiary.visitasDomiciliares}
              </p>
              <p>
                <strong>Auxílios Natalidade:</strong>{" "}
                {selectedBeneficiary.auxiliosNatalidade}
              </p>
              <p>
                <strong>Auxílios Funeral:</strong>{" "}
                {selectedBeneficiary.auxiliosFuneral}
              </p>
              <p>
                <strong>Outros Benefícios:</strong>{" "}
                {selectedBeneficiary.outrosBeneficios}
              </p>
              <p>
                <strong>Atendimentos Coletivos:</strong>{" "}
                {selectedBeneficiary.atendimentosColetivos}
              </p>
              <p>
                <strong>Famílias Participantes PAIF:</strong>{" "}
                {selectedBeneficiary.familiasParticipantesPAIF}
              </p>
              <p>
                <strong>Crianças 0-6 SCFV:</strong>{" "}
                {selectedBeneficiary.criancas06SCFV}
              </p>
              <p>
                <strong>Crianças 7-14 SCFV:</strong>{" "}
                {selectedBeneficiary.criancas714SCFV}
              </p>
              <p>
                <strong>Adolescentes 15-17 SCFV:</strong>{" "}
                {selectedBeneficiary.adolescentes1517SCFV}
              </p>
              <p>
                <strong>Adultos SCFV:</strong> {selectedBeneficiary.adultosSCFV}
              </p>
              <p>
                <strong>Idosos SCFV:</strong> {selectedBeneficiary.idososSCFV}
              </p>
              <p>
                <strong>Palestras e Oficinas:</strong>{" "}
                {selectedBeneficiary.palestrasOficinas}
              </p>
              <p>
                <strong>Pessoas com Deficiência:</strong>{" "}
                {selectedBeneficiary.pessoasDeficiencia}
              </p>
            </div>
          ) : (
            <p>Nenhuma informação adicional disponível.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdditionalInfo}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HistoricoTable;
