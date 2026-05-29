// 获取所有DOM元素
const form = document.getElementById('form');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const orderNo = document.getElementById('order-no');
const productCode = document.getElementById('product-code');
const quantity = document.getElementById('quantity');
const complaintsGroup = document.getElementById('complaints-group');
const complaintCheckboxes = complaintsGroup.querySelectorAll('input[type="checkbox"]');
const otherComplaint = document.getElementById('other-complaint');
const complaintDescription = document.getElementById('complaint-description');
const solutionsGroup = document.getElementById('solutions-group');
const solutionRadios = solutionsGroup.querySelectorAll('input[type="radio"]');
const otherSolution = document.getElementById('other-solution');
const solutionDescription = document.getElementById('solution-description');

// 1. 表单校验主函数：返回规则对应的布尔对象
function validateForm() {
    // 1. 姓名非空
    const fullNameValid = fullName.value.trim() !== '';

    // 2. 邮箱正则校验
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValid = emailReg.test(email.value.trim());

    // 3. 订单号：以2024开头，总共10位数字
    const orderNoReg = /^2024\d{6}$/;
    const orderNoValid = orderNoReg.test(orderNo.value.trim());

    // 4. 产品编码：XX##-X###-XX#
    // X=大小写字母，#=数字
    const productCodeReg = /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/;
    const productCodeValid = productCodeReg.test(productCode.value.trim());

    // 5. 数量：正整数
    const qty = parseInt(quantity.value, 10);
    const quantityValid = !isNaN(qty) && qty > 0;

    // 6. 投诉复选框至少选中一个
    let complaintChecked = false;
    complaintCheckboxes.forEach(cb => {
        if (cb.checked) complaintChecked = true;
    });

    // 7. 投诉描述：仅选中Other时要求≥20字符，否则true
    let complaintDescValid = true;
    if (otherComplaint.checked) {
        complaintDescValid = complaintDescription.value.length >= 20;
    }

    // 8. 解决方案单选至少选中一个
    let solutionChecked = false;
    solutionRadios.forEach(rd => {
        if (rd.checked) solutionChecked = true;
    });

    // 9. 方案描述：仅选中Other时要求≥20字符，否则true
    let solutionDescValid = true;
    if (otherSolution.checked) {
        solutionDescValid = solutionDescription.value.length >= 20;
    }

    // 按要求返回指定key的对象
    return {
        "full-name": fullNameValid,
        "email": emailValid,
        "order-no": orderNoValid,
        "product-code": productCodeValid,
        "quantity": quantityValid,
        "complaints-group": complaintChecked,
        "complaint-description": complaintDescValid,
        "solutions-group": solutionChecked,
        "solution-description": solutionDescValid
    };
}

// 2. 判断整个表单是否全部合法
function isValid(validateObj) {
    return Object.values(validateObj).every(Boolean);
}

// 通用：设置单个输入框边框颜色
function setInputBorder(el, isValid) {
    el.style.borderColor = isValid ? 'green' : 'red';
}

// 通用：设置 fieldset 边框颜色（复选框/单选组）
function setFieldsetBorder(fs, isValid) {
    fs.style.borderColor = isValid ? 'green' : 'red';
}

// ---------------------- 绑定 change 事件 ----------------------
// 姓名
fullName.addEventListener('change', () => {
    const res = validateForm();
    setInputBorder(fullName, res['full-name']);
});

// 邮箱
email.addEventListener('change', () => {
    const res = validateForm();
    setInputBorder(email, res.email);
});

// 订单号
orderNo.addEventListener('change', () => {
    const res = validateForm();
    setInputBorder(orderNo, res['order-no']);
});

// 产品编码
productCode.addEventListener('change', () => {
    const res = validateForm();
    setInputBorder(productCode, res['product-code']);
});

// 数量
quantity.addEventListener('change', () => {
    const res = validateForm();
    setInputBorder(quantity, res.quantity);
});

// 投诉复选框组（任一复选框change）
complaintCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
        const res = validateForm();
        setFieldsetBorder(complaintsGroup, res['complaints-group']);
        // 同步校验投诉描述
        if (otherComplaint.checked) {
            setInputBorder(complaintDescription, res['complaint-description']);
        }
    });
});

// 投诉描述文本域
complaintDescription.addEventListener('change', () => {
    const res = validateForm();
    if (otherComplaint.checked) {
        setInputBorder(complaintDescription, res['complaint-description']);
    }
});

// 解决方案单选组
solutionRadios.forEach(rd => {
    rd.addEventListener('change', () => {
        const res = validateForm();
        setFieldsetBorder(solutionsGroup, res['solutions-group']);
        // 同步校验方案描述
        if (otherSolution.checked) {
            setInputBorder(solutionDescription, res['solution-description']);
        }
    });
});

// 方案描述文本域
solutionDescription.addEventListener('change', () => {
    const res = validateForm();
    if (otherSolution.checked) {
        setInputBorder(solutionDescription, res['solution-description']);
    }
});

// ---------------------- 表单提交事件 ----------------------
form.addEventListener('submit', (e) => {
    e.preventDefault(); // 阻止默认提交
    const formResult = validateForm();
    const allValid = isValid(formResult);

    // 遍历所有项，给无效字段标红边框
    // 1. 基础输入框
    setInputBorder(fullName, formResult['full-name']);
    setInputBorder(email, formResult.email);
    setInputBorder(orderNo, formResult['order-no']);
    setInputBorder(productCode, formResult['product-code']);
    setInputBorder(quantity, formResult.quantity);

    // 2. 复选框组fieldset
    setFieldsetBorder(complaintsGroup, formResult['complaints-group']);
    // 投诉描述
    if (otherComplaint.checked) {
        setInputBorder(complaintDescription, formResult['complaint-description']);
    }

    // 3. 单选组fieldset
    setFieldsetBorder(solutionsGroup, formResult['solutions-group']);
    // 方案描述
    if (otherSolution.checked) {
        setInputBorder(solutionDescription, formResult['solution-description']);
    }

    // 这里可自行添加提交成功/失败提示，不影响测试
    if (allValid) {
        alert('Form submitted successfully!');
        form.reset();
        // 重置边框颜色
        const defaultColor = 'rgb(118, 118, 118)';
        document.querySelectorAll('input, textarea').forEach(el => el.style.borderColor = defaultColor);
        document.querySelectorAll('fieldset').forEach(fs => fs.style.borderColor = defaultColor);
    }
});