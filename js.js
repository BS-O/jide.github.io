// �������������վ�����JavaScript����
// ĿǰԭHTML��û��JavaScript���룬���������������ӽ�������

// ʾ��������ҳ�������ɺ����ʾ
document.addEventListener('DOMContentLoaded', function() {
    // �������������ӳ�ʼ������
    console.log('lyy_web');
    
    // ʾ����Ϊ�����������ӵ���¼�
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('������: ' + this.href);
            // ���������������Զ��嵼����Ϊ
        });
    });
});
