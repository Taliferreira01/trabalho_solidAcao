// Variáveis globais
let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
let donations = JSON.parse(localStorage.getItem('donations')) || [];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Configurar formulário de cadastro
    setupRegistrationForm();
    
    // Configurar modais
    setupModals();
    
    // Aplicar máscaras aos campos
    applyMasks();
    
    // Smooth scroll para navegação
    setupSmoothScroll();
    
    console.log('Aplicação inicializada com sucesso!');
}

// Configuração do formulário de cadastro
function setupRegistrationForm() {
    const form = document.getElementById('registrationForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleRegistrationSubmit(e);
        });
    }
}

// Manipular envio do formulário de cadastro
function handleRegistrationSubmit(e) {
    const form = e.target;
    const formData = new FormData(form);
    
    // Validar campos obrigatórios
    if (!validateRequiredFields(formData)) {
        showAlert('Por favor, preencha todos os campos obrigatórios marcados com *', 'error');
        return;
    }
    
    // Criar objeto do usuário
    const user = {
        id: generateId(),
        nome: formData.get('nome'),
        cpf: formData.get('cpf'),
        rg: formData.get('rg') || '',
        telefone: formData.get('telefone'),
        email: formData.get('email') || '',
        endereco: formData.get('endereco'),
        bairro: formData.get('bairro'),
        cep: formData.get('cep'),
        pessoas: parseInt(formData.get('pessoas')),
        renda: parseFloat(formData.get('renda')) || 0,
        observacoes: formData.get('observacoes') || '',
        dataRegistro: new Date().toISOString()
    };
    
    // Verificar se CPF já está cadastrado
    if (registeredUsers.find(u => u.cpf === user.cpf)) {
        showAlert('CPF já cadastrado no sistema!', 'error');
        return;
    }
    
    // Salvar usuário
    registeredUsers.push(user);
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    
    // Limpar formulário
    form.reset();
    
    // Mostrar modal de sucesso
    showSuccessModal();
    
    console.log('Usuário cadastrado:', user);
}

// Validar campos obrigatórios
function validateRequiredFields(formData) {
    const requiredFields = ['nome', 'cpf', 'telefone', 'endereco', 'bairro', 'cep', 'pessoas'];
    
    for (let field of requiredFields) {
        if (!formData.get(field) || formData.get(field).trim() === '') {
            return false;
        }
    }
    
    return true;
}

// Aplicar máscaras aos campos
function applyMasks() {
    // Máscara para CPF
    const cpfField = document.getElementById('cpf');
    if (cpfField) {
        cpfField.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            e.target.value = value;
        });
    }
    
    // Máscara para telefone
    const telefoneField = document.getElementById('telefone');
    if (telefoneField) {
        telefoneField.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{2})(\d)/, '($1) $2');
            value = value.replace(/(\d{4,5})(\d{4})$/, '$1-$2');
            e.target.value = value;
        });
    }
    
    // Máscara para CEP
    const cepField = document.getElementById('cep');
    if (cepField) {
        cepField.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{5})(\d)/, '$1-$2');
            e.target.value = value;
        });
    }
}

// Configurar modais
function setupModals() {
    // Modal de sucesso
    const modal = document.getElementById('successModal');
    const closeBtn = modal?.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            hideModal('successModal');
        });
    }
    
    // giar modal ao clicar fora
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
}

// Mostrar modal de sucesso
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

// Esconder modal
function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Navegação suave
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Função para rolar para seção específica
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Copiar PIX
function copyPix() {
    const pixKey = 'solidacao@email.com';
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(pixKey).then(function() {
            showAlert('Chave PIX copiada para a área de transferência!', 'success');
        });
    } else {
        // Fallback para navegadores mais antigos
        const textArea = document.createElement('textarea');
        textArea.value = pixKey;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showAlert('Chave PIX copiada para a área de transferência!', 'success');
    }
}

// Modal de doação de alimentos
function openDonationModal(type) {
    let message = '';
    
    switch(type) {
        case 'alimentos':
            message = 'Entre em contato conosco para agendar a entrega ou busca dos alimentos:\n\nTelefone: (11) 99999-9999\nE-mail: contato@solidacao.org\n\nOu visite um de nossos pontos de coleta!';
            break;
        default:
            message = 'Entre em contato para mais informações sobre doações.';
    }
    
    alert(message);
}

// Modal de voluntário
function openVolunteerModal() {
    const message = 'Obrigado pelo interesse em ser voluntário!\n\nEntre em contato conosco:\n\nTelefone: (11) 99999-9999\nE-mail: voluntarios@solidacao.org\n\nTeremos prazer em recebê-lo em nossa equipe!';
    alert(message);
}

// Sistema de alertas
function showAlert(message, type = 'info') {
    // Criar elemento de alerta
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" style="margin-left: 10px; background: none; border: none; color: inherit; cursor: pointer; font-size: 18px;">&times;</button>
    `;
    
    // Estilos do alerta
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 3000;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
        ${type === 'success' ? 'background-color: #27ae60;' : ''}
        ${type === 'error' ? 'background-color: #e74c3c;' : ''}
        ${type === 'info' ? 'background-color: #3498db;' : ''}
    `;
    
    // Adicionar ao DOM
    document.body.appendChild(alert);
    
    // Remover automaticamente após 5 segundos
    setTimeout(() => {
        if (alert.parentElement) {
            alert.remove();
        }
    }, 5000);
}

// Gerar ID único
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Função para buscar dados dos usuários cadastrados (para futuras funcionalidades)
function getRegisteredUsers() {
    return registeredUsers;
}

// Função para obter estatísticas
function getStatistics() {
    return {
        totalUsers: registeredUsers.length,
        totalFamilyMembers: registeredUsers.reduce((sum, user) => sum + user.pessoas, 0),
        totalDonations: donations.length,
        lastRegistration: registeredUsers.length > 0 ? registeredUsers[registeredUsers.length - 1].dataRegistro : null
    };
}

// Exportar dados para download (funcionalidade administrativa)
function exportData() {
    const data = {
        users: registeredUsers,
        donations: donations,
        exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `solidacao-dados-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Log para debug
console.log('Script SolidAção carregado com sucesso!');

// Envio de dados para backend
// Função para enviar dados para o backend
async function submitRegistrationForm(formData) {
    try {
        const response = await fetch('http://localhost:3306/cadastrar-beneficiario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        
        if (result.success) {
            showSuccessModal();
            document.getElementById('registrationForm').reset();
        } else {
            alert('Erro ao cadastrar: ' + result.message);
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro de conexão. Tente novamente.');
    }
}

// Modifique a função de submit do formulário
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        nome: document.getElementById('nome').value, 
        telefone: document.getElementById('telefone').value,
        email: document.getElementById('email').value,
        endereco: document.getElementById('endereco').value,
        bairro: document.getElementById('bairro').value,
        cep: document.getElementById('cep').value,
        pessoas: document.getElementById('pessoas').value,
        renda: document.getElementById('renda').value,
        observacoes: document.getElementById('observacoes').value
    };
    
    submitRegistrationForm(formData);
});

// Adicione esta função para mostrar modal de sucesso
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'block';
    
    // Fechar modal
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }
    
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
}
