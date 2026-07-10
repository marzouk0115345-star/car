function calculateInstallment() {
    // جلب القيم من المدخلات
    const price = parseFloat(document.getElementById('carPrice').value);
    const downPayment = parseFloat(document.getElementById('downPayment').value);
    const months = parseInt(document.getElementById('months').value);
    
    // التحقق من صحة البيانات
    if (isNaN(price) || isNaN(downPayment) || price <= downPayment) {
        alert("يرجى إدخال مبالغ صحيحة (المقدم يجب أن يكون أقل من سعر السيارة)");
        return;
    }

    // المبلغ المتبقي للقسط
    const loanAmount = price - downPayment;
    
    // حساب الفائدة (مثال: فائدة بسيطة 10% سنوياً)
    const annualInterestRate = .0; 
    const totalInterest = loanAmount * annualInterestRate * (months / 12);
    
    // إجمالي المبلغ مع الفائدة
    const totalWithInterest = loanAmount + totalInterest;
    
    // القسط الشهري
    const monthlyInstallment = totalWithInterest / months;

    // عرض النتيجة
    const resultBox = document.getElementById('resultBox');
    const monthlyAmountDisplay = document.getElementById('monthlyAmount');
    
    monthlyAmountDisplay.innerText = Math.round(monthlyInstallment).toLocaleString();
    resultBox.style.display = 'block';}