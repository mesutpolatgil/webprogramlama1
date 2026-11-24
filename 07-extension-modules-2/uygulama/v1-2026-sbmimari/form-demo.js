/**
 * ==========================================================================
 * SCÜ Şarkışla UBYO Web Programlama I - Hafta 10: Ş.B. Mimari
 * Modül: Web Forms & Client-Side Tools DevOps Studio v2.4
 * Geliştirici: Mert Özsoy (Rol 1: Canlı Uygulama & Kod)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elemanları ---
    const form = document.getElementById('mesajFormu');
    const adInput = document.getElementById('adiniz');
    const epostaInput = document.getElementById('eposta');
    const telefonInput = document.getElementById('telefon');
    const sunucuKoduInput = document.getElementById('sunucuKodu');
    const oncelikSelect = document.getElementById('oncelik');
    const kaynakSlider = document.getElementById('kaynakKullanimi');
    const sliderValueText = document.getElementById('sliderValue');
    const fileInput = document.getElementById('raporDosyasi');
    const dropZone = document.getElementById('dropZone');
    const fileSelectedName = document.getElementById('fileSelectedName');
    const chkDryRun = document.getElementById('chkDryRun');
    const chkSanitize = document.getElementById('chkSanitize');

    const btnGonder = document.getElementById('btnGonder');
    const btnSpinner = document.getElementById('btnSpinner');
    const btnPrefill = document.getElementById('btnPrefill');
    const btnExportJson = document.getElementById('btnExportJson');
    const btnSifirla = document.getElementById('btnSifirla');
    const formValidityBadge = document.getElementById('formValidityBadge');

    // Validation HUD
    const hudActiveElement = document.getElementById('hudActiveElement');
    const badgeValid = document.getElementById('badge-valid');
    const badgeValueMissing = document.getElementById('badge-valueMissing');
    const badgeTypeMismatch = document.getElementById('badge-typeMismatch');
    const badgePatternMismatch = document.getElementById('badge-patternMismatch');
    const badgeTooShort = document.getElementById('badge-tooShort');
    const badgeCustomError = document.getElementById('badge-customError');

    // Terminal & Payload
    const payloadView = document.getElementById('payloadView');
    const headersPreview = document.getElementById('headersPreview');
    const responseBlock = document.getElementById('responseBlock');
    const responseBodyView = document.getElementById('responseBodyView');
    const responseStatusBadge = document.getElementById('responseStatusBadge');
    const btnCopyPayload = document.getElementById('btnCopyPayload');
    const btnClearConsole = document.getElementById('btnClearConsole');

    // Toolchain Terminal
    const terminalLogs = document.getElementById('terminalLogs');
    const btnRunLint = document.getElementById('btnRunLint');
    const btnRunTest = document.getElementById('btnRunTest');
    const btnRunBuild = document.getElementById('btnRunBuild');
    const btnRunPipeline = document.getElementById('btnRunPipeline');
    const btnClearTerm = document.getElementById('btnClearTerm');

    // Tab Bar
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Ses, Modlar (Sunum / Tema / X-Ray) ve Uptime
    const btnAudioToggle = document.getElementById('btnAudioToggle');
    const audioIcon = document.getElementById('audioIcon');
    const btnPresentation = document.getElementById('btnPresentation');
    const btnThemeToggle = document.getElementById('btnThemeToggle');
    const btnXrayToggle = document.getElementById('btnXrayToggle');
    const uptimeClock = document.getElementById('uptimeClock');
    const toastContainer = document.getElementById('toastContainer');

    let audioEnabled = true;
    let selectedFileObj = null;

    // ==========================================================================
    // 1. Web Audio API (Yüksek Teknolojili Ses Efektleri)
    // ==========================================================================
    let audioCtx = null;
    function playBeep(freq = 600, type = 'sine', duration = 0.08) {
        if (!audioEnabled) return;
        try {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        } catch (e) {
            // Audio context engellendiyse sessizce devam et
        }
    }

    function playSuccessChime() {
        if (!audioEnabled) return;
        setTimeout(() => playBeep(523.25, 'triangle', 0.1), 0);
        setTimeout(() => playBeep(659.25, 'triangle', 0.1), 90);
        setTimeout(() => playBeep(783.99, 'triangle', 0.2), 180);
    }

    function playErrorBuzz() {
        if (!audioEnabled) return;
        setTimeout(() => playBeep(180, 'sawtooth', 0.12), 0);
        setTimeout(() => playBeep(140, 'sawtooth', 0.18), 100);
    }

    btnAudioToggle.addEventListener('click', () => {
        audioEnabled = !audioEnabled;
        audioIcon.textContent = audioEnabled ? '🔊' : '🔇';
        showToast('Ses Efektleri', audioEnabled ? 'Ses açık' : 'Ses kapatıldı', 'info');
    });

    // ==========================================================================
    // 1B. Üst Bar Modları: SUNUM / AÇIK-KOYU TEMA / X-RAY İSKELET
    // ==========================================================================
    function stampXrayTags() {
        document.querySelectorAll('.input-wrapper').forEach(wrapper => {
            const ctrl = wrapper.querySelector('input, select, textarea');
            if (!ctrl) return;
            const tag = ctrl.tagName.toLowerCase();
            const parts = [tag];
            if (ctrl.type && tag === 'input') parts.push(`type="${ctrl.type}"`);
            if (ctrl.name) parts.push(`name="${ctrl.name}"`);
            if (ctrl.required) parts.push('required');
            if (ctrl.getAttribute('pattern')) parts.push('pattern');
            wrapper.setAttribute('data-xray-tag', `<${parts.join(' ')}>`);
        });
    }

    function applyTheme(theme) {
        const isLight = theme === 'light';
        document.body.classList.toggle('light-theme', isLight);
        document.body.classList.toggle('dark-theme', !isLight);
        if (btnThemeToggle) {
            btnThemeToggle.classList.toggle('active', isLight);
            btnThemeToggle.setAttribute('aria-pressed', String(isLight));
            btnThemeToggle.textContent = isLight ? '🌙 KOYU' : '☀️ AÇIK';
        }
    }

    try {
        const savedTheme = localStorage.getItem('sbmimari-theme');
        if (savedTheme === 'light' || savedTheme === 'dark') {
            applyTheme(savedTheme);
        }
    } catch (e) {
        // localStorage erişilemiyorsa varsayılan koyu temada kal
    }

    if (btnThemeToggle) {
        btnThemeToggle.addEventListener('click', () => {
            const nextTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
            applyTheme(nextTheme);
            try { localStorage.setItem('sbmimari-theme', nextTheme); } catch (e) {}
            playBeep(nextTheme === 'light' ? 740 : 480, 'sine', 0.06);
            showToast('Tema Değiştirildi', nextTheme === 'light' ? 'Açık tema (projektör dostu) aktif.' : 'Koyu DevOps teması aktif.', 'info');
        });
    }

    if (btnXrayToggle) {
        btnXrayToggle.addEventListener('click', () => {
            const active = document.body.classList.toggle('xray-mode');
            if (active) stampXrayTags();
            btnXrayToggle.classList.toggle('active', active);
            btnXrayToggle.setAttribute('aria-pressed', String(active));
            btnXrayToggle.textContent = active ? '🦴 X-RAY: AÇIK' : '🦴 X-RAY';
            playBeep(active ? 820 : 420, 'triangle', 0.07);
            showToast('X-Ray Form İskeleti', active ? 'Semantik HTML ve form öznitelikleri vurgulanıyor.' : 'X-Ray kapatıldı.', 'info');
        });
    }

    if (btnPresentation) {
        btnPresentation.addEventListener('click', () => {
            const active = document.body.classList.toggle('presentation-mode');
            btnPresentation.classList.toggle('active', active);
            btnPresentation.setAttribute('aria-pressed', String(active));
            btnPresentation.textContent = active ? '📽️ SUNUM: AÇIK' : '📽️ SUNUM';
            playBeep(active ? 680 : 440, 'sine', 0.06);
            showToast('Sunum Modu', active ? 'Büyük yazı boyutu aktif (sınıf sunumu için).' : 'Standart görünüm aktif.', 'info');
        });
    }

    // ==========================================================================
    // 2. Toast Bildirim Sistemi
    // ==========================================================================
    function showToast(title, message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';

        toast.innerHTML = `
            <span class="toast-icon">${icon}</span>
            <div class="toast-content">
                <strong>${title}</strong>
                <span>${message}</span>
            </div>
        `;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3500);
    }

    // ==========================================================================
    // 3. Canlı Constraint Validation API Kontrolü ve HUD Güncelleme
    // ==========================================================================
    function updateHUD(input) {
        if (!input || !input.validity) {
            hudActiveElement.textContent = 'Aktif Alan: Yok';
            return;
        }

        hudActiveElement.textContent = `Aktif: <${input.tagName.toLowerCase()}#${input.id}>`;
        const v = input.validity;

        function setBadge(el, val) {
            el.querySelector('.v').textContent = val ? 'true' : 'false';
            el.classList.remove('is-true', 'is-false');
            el.classList.add(val ? 'is-true' : 'is-false');
        }

        setBadge(badgeValid, v.valid);
        setBadge(badgeValueMissing, v.valueMissing);
        setBadge(badgeTypeMismatch, v.typeMismatch);
        setBadge(badgePatternMismatch, v.patternMismatch);
        setBadge(badgeTooShort, v.tooShort);
        setBadge(badgeCustomError, v.customError);
    }

    function validateField(input, silent = false) {
        const errorSpan = document.getElementById(`error-${input.id}`);
        const isValid = input.validity.valid;

        updateHUD(input);

        if (isValid) {
            input.classList.remove('invalid');
            input.classList.add('valid');
            if (errorSpan) errorSpan.textContent = '';
        } else {
            input.classList.remove('valid');
            input.classList.add('invalid');

            if (errorSpan && !silent) {
                if (input.validity.valueMissing) {
                    errorSpan.textContent = '⚠️ Bu alan zorunludur.';
                } else if (input.validity.typeMismatch && input.type === 'email') {
                    errorSpan.textContent = '⚠️ Geçerli bir e-posta formatı giriniz (örn: ad@sirket.com).';
                } else if (input.validity.tooShort) {
                    errorSpan.textContent = `⚠️ En az ${input.minLength} karakter girmelisiniz (Şu an: ${input.value.length}).`;
                } else if (input.validity.patternMismatch) {
                    errorSpan.textContent = input.title || '⚠️ İstenen kalıp formatına uymuyor.';
                } else {
                    errorSpan.textContent = input.validationMessage || '⚠️ Hatalı veri girdisi.';
                }
            }
        }

        checkOverallFormValidity();
        return isValid;
    }

    function checkOverallFormValidity() {
        const isValid = form.checkValidity();
        if (isValid) {
            formValidityBadge.textContent = '✓ Tüm Alanlar Geçerli';
            formValidityBadge.className = 'form-badge valid';
        } else {
            formValidityBadge.textContent = '✗ Eksik / Geçersiz Alanlar';
            formValidityBadge.className = 'form-badge invalid';
        }
    }

    // Input dinleyicileri
    const monitoredInputs = [adInput, epostaInput, telefonInput, sunucuKoduInput];
    monitoredInputs.forEach(input => {
        if (!input) return;
        input.addEventListener('focus', () => {
            updateHUD(input);
            playBeep(450, 'sine', 0.04);
        });
        input.addEventListener('input', () => {
            validateField(input);
            updateLivePayloadPreview();
        });
        input.addEventListener('blur', () => {
            validateField(input);
        });
    });

    // ==========================================================================
    // 4. Range Slider ve Dosya Sürükle-Bırak
    // ==========================================================================
    kaynakSlider.addEventListener('input', (e) => {
        const val = e.target.value;
        let desc = 'Dengeli';
        if (val < 30) desc = 'Tasarruflu';
        else if (val > 75) desc = 'Maksimum Performans';
        sliderValueText.textContent = `${val}% RAM/CPU (${desc})`;
        updateLivePayloadPreview();
        playBeep(300 + (val * 4), 'sine', 0.03);
    });

    oncelikSelect.addEventListener('change', () => {
        updateLivePayloadPreview();
        playBeep(500, 'triangle', 0.05);
    });

    // Sürükle Bırak İşlemleri
    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropZone.classList.add('dragover');
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropZone.classList.remove('dragover');
        });
    });

    dropZone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files.length > 0) {
            handleSelectedFile(files[0]);
        }
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleSelectedFile(e.target.files[0]);
        }
    });

    function handleSelectedFile(file) {
        if (file.size > 2 * 1024 * 1024) {
            playErrorBuzz();
            showToast('Dosya Çok Büyük', 'Seçilen dosya 2MB sınırını aşıyor!', 'error');
            fileInput.value = '';
            fileSelectedName.textContent = '❌ Hata: Dosya 2MB sınırını aşıyor';
            selectedFileObj = null;
            return;
        }

        selectedFileObj = file;
        const sizeKb = (file.size / 1024).toFixed(1);
        fileSelectedName.textContent = `📄 ${file.name} (${sizeKb} KB - ${file.type || 'text/plain'})`;
        playBeep(800, 'sine', 0.08);
        showToast('Dosya Eklendi', `${file.name} başarıyla seçildi.`, 'info');
        updateLivePayloadPreview();
    }

    // ==========================================================================
    // 5. Canlı Payload & Headers Görünümü
    // ==========================================================================
    function getFormValuesObject() {
        return {
            adiniz: adInput.value || null,
            eposta: epostaInput.value || null,
            telefon: telefonInput.value || null,
            sunucuKodu: sunucuKoduInput.value || null,
            oncelik: oncelikSelect.value,
            kaynakKullanimi: `${kaynakSlider.value}%`,
            dosya: selectedFileObj ? {
                dosyaAdi: selectedFileObj.name,
                boyut: `${(selectedFileObj.size / 1024).toFixed(1)} KB`,
                mimeTuru: selectedFileObj.type || 'text/plain'
            } : 'Dosya seçilmedi',
            secenekler: {
                dryRun: chkDryRun.checked,
                sanitize: chkSanitize.checked
            },
            zamanDamgasi: new Date().toISOString()
        };
    }

    function updateLivePayloadPreview() {
        const payload = getFormValuesObject();
        payloadView.textContent = JSON.stringify(payload, null, 2);
    }

    // ==========================================================================
    // 6. Form Gönderme (Submit) — Gerçek Fetch ve FormData
    // ==========================================================================
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // 1. Doğrulama Kontrolü
        let isAllValid = true;
        monitoredInputs.forEach(input => {
            if (!validateField(input, false)) {
                isAllValid = false;
            }
        });

        if (!isAllValid) {
            playErrorBuzz();
            showToast('Form Geçersiz', 'Lütfen kırmızıyla işaretlenen alanları düzeltin.', 'error');
            const firstInvalid = form.querySelector('.invalid');
            if (firstInvalid) firstInvalid.focus();
            return;
        }

        playBeep(700, 'triangle', 0.1);
        btnGonder.disabled = true;
        btnSpinner.hidden = false;
        btnGonder.querySelector('.btn-text').textContent = 'Operasyon İletiliyor...';

        // 2. FormData Nesnesi Oluşturma
        const formData = new FormData(form);
        if (selectedFileObj) {
            formData.set('raporDosyasi', selectedFileObj, selectedFileObj.name);
        }

        // Gönderilen başlıklar simülasyonu
        const boundaryId = '----WebKitFormBoundary' + Math.random().toString(36).substring(2, 15);
        headersPreview.textContent = `POST /posts HTTP/1.1
Host: jsonplaceholder.typicode.com
Content-Type: multipart/form-data; boundary=${boundaryId}
Content-Length: ~${JSON.stringify(getFormValuesObject()).length * 2} bytes
X-Client-Tool: SCU-SBMimari-DevOps-v2.4
Origin: http://localhost:5173`;

        const startTime = performance.now();

        try {
            // Gerçek POST İsteği
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: formData
            });

            const elapsed = Math.round(performance.now() - startTime);

            if (!response.ok) {
                throw new Error(`HTTP Durum Kodu: ${response.status} (${response.statusText})`);
            }

            const data = await response.json();
            playSuccessChime();

            responseBlock.hidden = false;
            responseStatusBadge.textContent = `${response.status} Created (${elapsed}ms)`;
            responseStatusBadge.style.color = '#10b981';

            responseBodyView.textContent = JSON.stringify({
                status: 'SUCCESS',
                httpCode: response.status,
                sure: `${elapsed} ms`,
                sunucuMesaji: 'Operasyon bildirimi başarıyla kuyruğa alındı.',
                sunucuTarafindanUretilenId: data.id,
                istemciFormDataOzeti: getFormValuesObject()
            }, null, 2);

            showToast('Operasyon Başlatıldı!', `Sunucu Yanıtı: 201 Created (${elapsed}ms)`, 'success');

            // Konsol sekmesine odaklan
            switchTab('tab-payload');

        } catch (error) {
            playErrorBuzz();
            responseBlock.hidden = false;
            responseStatusBadge.textContent = 'İletim Hatası';
            responseStatusBadge.style.color = '#ef4444';
            responseBodyView.textContent = `// HATA DETAYI:\n${error.message}`;
            showToast('İletim Hatası', error.message, 'error');
        } finally {
            btnGonder.disabled = false;
            btnSpinner.hidden = true;
            btnGonder.querySelector('.btn-text').textContent = 'Operasyonu Başlat (Submit)';
        }
    });

    // ==========================================================================
    // 7. Hızlı Doldur (Prefill) & Sıfırla
    // ==========================================================================
    btnPrefill.addEventListener('click', () => {
        adInput.value = 'Mert Özsoy';
        epostaInput.value = 'mert@sbmimari.dev';
        telefonInput.value = '0555 987 65 43';
        sunucuKoduInput.value = 'SRV-2026';
        oncelikSelect.value = 'yuksek';
        kaynakSlider.value = 85;
        sliderValueText.textContent = '85% RAM/CPU (Maksimum Performans)';

        monitoredInputs.forEach(input => validateField(input, true));
        updateLivePayloadPreview();
        playSuccessChime();
        showToast('Otomatik Dolduruldu', 'Örnek sistem verileri yüklendi.', 'info');
    });

    btnSifirla.addEventListener('click', () => {
        setTimeout(() => {
            monitoredInputs.forEach(input => {
                input.classList.remove('valid', 'invalid');
                const err = document.getElementById(`error-${input.id}`);
                if (err) err.textContent = '';
            });
            fileSelectedName.textContent = 'Henüz dosya seçilmedi';
            selectedFileObj = null;
            kaynakSlider.value = 50;
            sliderValueText.textContent = '50% RAM/CPU';
            formValidityBadge.textContent = 'Doldurulmayı Bekliyor';
            formValidityBadge.className = 'form-badge';
            updateLivePayloadPreview();
            updateHUD(null);
            playBeep(250, 'sine', 0.1);
        }, 50);
    });

    btnExportJson.addEventListener('click', () => {
        const json = JSON.stringify(getFormValuesObject(), null, 2);
        navigator.clipboard.writeText(json).then(() => {
            playBeep(900, 'sine', 0.08);
            showToast('Panoya Kopyalandı', 'Form yükü JSON formatında kopyalandı.', 'success');
        });
    });

    btnCopyPayload.addEventListener('click', () => {
        navigator.clipboard.writeText(payloadView.textContent).then(() => {
            playBeep(900, 'sine', 0.08);
            showToast('Kopyalandı', 'Canlı FormData yükü panoya alındı.', 'success');
        });
    });

    btnClearConsole.addEventListener('click', () => {
        responseBlock.hidden = true;
        updateLivePayloadPreview();
        playBeep(400, 'sine', 0.05);
    });

    // ==========================================================================
    // 8. Sekme Değiştirici (Tabs)
    // ==========================================================================
    function switchTab(tabId) {
        tabBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabId);
        });
        tabContents.forEach(content => {
            content.classList.toggle('active', content.id === tabId);
        });
        playBeep(550, 'sine', 0.03);
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchTab(btn.dataset.tab);
        });
    });

    // ==========================================================================
    // 9. Modül 2: Client-Side Toolchain Sanal Terminal Simülatörü
    // ==========================================================================
    function appendTerminal(lines, delay = 120) {
        let i = 0;
        function step() {
            if (i < lines.length) {
                const item = lines[i];
                const code = document.createElement('code');
                code.className = `term-line ${item.type || 'info'}`;
                code.textContent = item.text;
                terminalLogs.appendChild(code);
                terminalLogs.scrollTop = terminalLogs.scrollHeight;
                playBeep(600 + (i * 40), 'sine', 0.02);
                i++;
                setTimeout(step, delay);
            }
        }
        step();
    }

    btnClearTerm.addEventListener('click', () => {
        terminalLogs.innerHTML = `<code class="term-line prompt">$ // Terminal temizlendi.</code>`;
        playBeep(350, 'sine', 0.04);
    });

    // npm run lint
    btnRunLint.addEventListener('click', () => {
        switchTab('tab-toolchain');
        appendTerminal([
            { type: 'prompt', text: '$ npx eslint . --config eslint.config.js' },
            { type: 'info', text: '🔍 [ESLint Flat Config]: src/ ve form/ dosyaları taranıyor...' },
            { type: 'info', text: '   -> index.html: HTML semantic kontrolü... OK' },
            { type: 'info', text: '   -> form-demo.js: No-unused-vars, valid-typeof... OK' },
            { type: 'success', text: '✨ 0 errors, 0 warnings. (Kod kalite standartları sağlandı)' }
        ], 140);
    });

    // npm run test
    btnRunTest.addEventListener('click', () => {
        switchTab('tab-toolchain');
        appendTerminal([
            { type: 'prompt', text: '$ npm run test (vitest run)' },
            { type: 'info', text: '⚡ Vitest v1.6.0 runner başlatıldı...' },
            { type: 'success', text: '✓ tests/form-validation.test.js (3 tests passed)' },
            { type: 'info', text: '   ✓ checkValidity() doğru tetikleniyor (4ms)' },
            { type: 'info', text: '   ✓ Constraint Validation API regex pattern eşleşti (2ms)' },
            { type: 'info', text: '   ✓ FormData multipart sınırları otomatik oluşturuldu (3ms)' },
            { type: 'success', text: 'Test Files  1 passed (1)' },
            { type: 'success', text: 'Tests       3 passed (3)' },
            { type: 'info', text: 'Duration    248ms' }
        ], 130);
    });

    // npm run build
    btnRunBuild.addEventListener('click', () => {
        switchTab('tab-toolchain');
        appendTerminal([
            { type: 'prompt', text: '$ npm run build (vite build)' },
            { type: 'info', text: 'vite v5.4.2 building for production...' },
            { type: 'info', text: 'transforming (14) modules...' },
            { type: 'info', text: '✓ 14 modules transformed.' },
            { type: 'success', text: 'dist/index.html                   3.84 kB │ gzip: 1.22 kB' },
            { type: 'success', text: 'dist/assets/index-D8jK1a9.css     4.12 kB │ gzip: 1.45 kB' },
            { type: 'success', text: 'dist/assets/index-B91mKw2.js      3.98 kB │ gzip: 1.38 kB' },
            { type: 'success', text: '✓ built in 184ms (Üretim paketi hazırlandı)' }
        ], 150);
    });

    // git push CI/CD
    btnRunPipeline.addEventListener('click', () => {
        switchTab('tab-toolchain');
        appendTerminal([
            { type: 'prompt', text: '$ git push origin main' },
            { type: 'info', text: 'Enumerating objects: 7, done.' },
            { type: 'info', text: 'Writing objects: 100% (7/7), 2.84 KiB, done.' },
            { type: 'info', text: 'To https://github.com/sbmimari/webprogramlama1.git' },
            { type: 'warning', text: '⚙️ GitHub Actions CI Pipeline Tetiklendi (#9481):' },
            { type: 'success', text: '   [✓ Job 1]: Install deps (npm ci) — 4s' },
            { type: 'success', text: '   [✓ Job 2]: Run tests (npm run test) — 2s' },
            { type: 'success', text: '   [✓ Job 3]: Build project (npm run build) — 3s' },
            { type: 'success', text: '   [✓ Job 4]: Deploy to GitHub Pages — Live at https://sbmimari.github.io' },
            { type: 'success', text: '🎉 Dağıtım Başarılı! Pipeline yeşil onay aldı.' }
        ], 180);
    });

    // ==========================================================================
    // 10. Adım 2: İnteraktif "Doğru vs Yanlış" Deney Laboratuvarı
    // ==========================================================================
    const labGetUser = document.getElementById('labGetUser');
    const labGetPass = document.getElementById('labGetPass');
    const btnLabGet = document.getElementById('btnLabGet');
    const btnLabPost = document.getElementById('btnLabPost');
    const labHttpPreview = document.getElementById('labHttpPreview');
    const labBadLabel = document.getElementById('labBadLabel');
    const labBadStatus = document.getElementById('labBadStatus');
    const labAccentPicker = document.getElementById('labAccentPicker');
    const labAccentCode = document.getElementById('labAccentCode');
    const btnLabAppearance = document.getElementById('btnLabAppearance');
    const labStyleStage = document.getElementById('labStyleStage');

    let labHttpMethod = 'GET';

    function renderLabHttpPreview() {
        if (!labHttpPreview || !labGetUser || !labGetPass) return;
        const u = encodeURIComponent(labGetUser.value || '');
        const p = encodeURIComponent(labGetPass.value || '');
        if (labHttpMethod === 'GET') {
            labHttpPreview.className = 'lab-http-preview bad';
            labHttpPreview.innerHTML =
                `GET /giris?k=${u}&sifre=${p} HTTP/1.1\nHost: okul.edu.tr` +
                `<span class="warn-line">⚠️ TEHLİKE: Şifre URL adres çubuğuna, tarayıcı geçmişine ve sunucu loglarına düz metin yazıldı!</span>`;
        } else {
            labHttpPreview.className = 'lab-http-preview good';
            labHttpPreview.innerHTML =
                `POST /giris HTTP/1.1\nHost: okul.edu.tr\nContent-Type: application/x-www-form-urlencoded\n\nk=${u}&sifre=${p}` +
                `<span class="ok-line">✓ DOĞRU: URL temiz kaldı (/giris). Hassas veri HTTP gövdesinde (HTTPS ile şifreli) gönderilir.</span>`;
        }
    }

    if (btnLabGet && btnLabPost) {
        btnLabGet.addEventListener('click', () => {
            labHttpMethod = 'GET';
            btnLabGet.classList.add('active');
            btnLabPost.classList.remove('active');
            renderLabHttpPreview();
            playBeep(260, 'sawtooth', 0.06);
        });
        btnLabPost.addEventListener('click', () => {
            labHttpMethod = 'POST';
            btnLabPost.classList.add('active');
            btnLabGet.classList.remove('active');
            renderLabHttpPreview();
            playBeep(680, 'triangle', 0.06);
        });
        [labGetUser, labGetPass].forEach(el => {
            if (el) el.addEventListener('input', renderLabHttpPreview);
        });
        renderLabHttpPreview();
    }

    if (labBadLabel && labBadStatus) {
        labBadLabel.addEventListener('click', () => {
            labBadStatus.textContent = '✗ Gördün mü? Etikete tıkladın ama for="id" olmadığı için kutu odaklanmadı!';
            labBadStatus.style.color = 'var(--danger)';
            playBeep(220, 'sawtooth', 0.06);
        });
    }

    if (labAccentPicker && labStyleStage && labAccentCode) {
        labAccentPicker.addEventListener('input', (e) => {
            const color = e.target.value;
            labStyleStage.style.setProperty('--lab-accent', color);
            labAccentCode.textContent = color;
        });
    }

    if (btnLabAppearance && labStyleStage) {
        btnLabAppearance.addEventListener('click', () => {
            const on = labStyleStage.classList.toggle('custom-appearance');
            btnLabAppearance.setAttribute('aria-pressed', String(on));
            btnLabAppearance.textContent = on ? 'appearance: none (Açık)' : 'appearance: none (Kapalı)';
            playBeep(on ? 720 : 460, 'sine', 0.05);
        });
    }

    // ==========================================================================
    // 10B. Adım 3: Canlı Regex / HTML5 pattern Laboratuvarı
    // ==========================================================================
    const regexPatternInput = document.getElementById('regexPatternInput');
    const regexTestInput = document.getElementById('regexTestInput');
    const regexResultBox = document.getElementById('regexResultBox');
    const regexHtmlOut = document.getElementById('regexHtmlOut');
    const regexPresetBtns = document.querySelectorAll('.regex-preset');

    function evaluateRegexLab() {
        if (!regexPatternInput || !regexTestInput || !regexResultBox || !regexHtmlOut) return;
        const pat = regexPatternInput.value;
        const val = regexTestInput.value;

        regexHtmlOut.textContent = `<input type="text" pattern="${pat}" required>`;

        if (!pat) {
            regexResultBox.className = 'regex-result warn';
            regexResultBox.textContent = '⚠️ Bir pattern (regex) kuralı girin.';
            return;
        }

        try {
            // HTML5 pattern tüm değeri eşler (^(?:...)$ mantığı)
            const re = new RegExp(`^(?:${pat})$`);
            if (!val) {
                regexResultBox.className = 'regex-result warn';
                regexResultBox.innerHTML = 'ℹ️ Değer boş — <code>validity.valueMissing: true</code>';
                return;
            }
            const matched = re.test(val);
            if (matched) {
                regexResultBox.className = 'regex-result ok';
                regexResultBox.innerHTML = '✓ Eşleşti! — <code>validity.valid: true</code> · <code>patternMismatch: false</code>';
            } else {
                regexResultBox.className = 'regex-result bad';
                regexResultBox.innerHTML = '✗ Eşleşmedi! — <code>validity.valid: false</code> · <code>patternMismatch: true</code>';
            }
        } catch (err) {
            regexResultBox.className = 'regex-result bad';
            regexResultBox.textContent = `✗ Geçersiz Regex sözdizimi: ${err.message}`;
        }
    }

    if (regexPatternInput && regexTestInput) {
        regexPatternInput.addEventListener('input', evaluateRegexLab);
        regexTestInput.addEventListener('input', evaluateRegexLab);
        regexPresetBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                regexPatternInput.value = btn.dataset.pattern || '';
                regexTestInput.value = btn.dataset.sample || '';
                evaluateRegexLab();
                playBeep(640, 'sine', 0.04);
            });
        });
        evaluateRegexLab();
    }

    // ==========================================================================
    // 10C. Adım 4: Sınıf İçi İnteraktif Mini Sınav (6 Soru)
    // ==========================================================================
    const quizContainer = document.getElementById('quizContainer');
    const quizScoreBadge = document.getElementById('quizScoreBadge');

    const QUIZ_QUESTIONS = [
        {
            q: '<code>name</code> özniteliği olmayan bir <code>&lt;input&gt;</code> alanı form gönderildiğinde sunucuya gider mi?',
            options: [
                'Evet, id değeri otomatik olarak kullanılır',
                'Hayır, name özniteliği olmayan alan sunucuya gönderilmez',
                'Sadece POST yönteminde gönderilir',
                'Sadece required yazılıysa gönderilir'
            ],
            answer: 1,
            explain: 'Form verisi name=value çiftleri olarak gönderilir. name özniteliği yoksa tarayıcı o alanı isteğe hiç dahil etmez.'
        },
        {
            q: 'İstemci tarafı (tarayıcı) doğrulaması tek başına güvenlik sağlar mı?',
            options: [
                'Evet, required ve pattern varsa sunucuya gerek yoktur',
                'Hayır, sadece kullanıcı deneyimi (UX) içindir; sunucu doğrulaması şarttır',
                'Sadece HTTPS kullanılıyorsa yeterlidir',
                'Constraint Validation API kullanılırsa güvenlik tamdır'
            ],
            answer: 1,
            explain: 'İstemci doğrulaması DevTools veya doğrudan HTTP isteğiyle kolayca atlanabilir. Gerçek güvenlik her zaman sunucuda sağlanır.'
        },
        {
            q: 'Şifre ve hassas veriler neden <code>method="GET"</code> ile gönderilmez?',
            options: [
                'GET yöntemi sadece sayısal veri taşır',
                'GET veriyi URL adres çubuğuna ekler; tarayıcı geçmişinde ve sunucu loglarında düz metin kalır',
                'GET tarayıcıda form doğrulamasını kapatır',
                'GET en fazla 5 karakter destekler'
            ],
            answer: 1,
            explain: 'GET isteğinde parametreler ?sifre=... şeklinde URL’ye yazılır; geçmişte, proxy ve sunucu loglarında açıkça görünür.'
        },
        {
            q: 'Bir formda <code>&lt;input type="file"&gt;</code> ile dosya içeriğini sunucuya göndermek için hangi <code>enctype</code> zorunludur?',
            options: [
                'application/x-www-form-urlencoded',
                'text/plain',
                'multipart/form-data',
                'application/json'
            ],
            answer: 2,
            explain: 'enctype="multipart/form-data" yazılmazsa sunucuya yalnızca dosya adı gider, dosyanın ikili içeriği gönderilmez.'
        },
        {
            q: '<code>fetch()</code> ile gövdeye <code>new FormData(form)</code> verirken <code>Content-Type</code> başlığını neden elle yazmamalıyız?',
            options: [
                'Tarayıcı benzersiz boundary değerini otomatik ekler; elle yazarsak boundary kaybolur',
                'fetch() fonksiyonu Content-Type başlığını hiç desteklemez',
                'FormData sadece GET isteğiyle çalışır',
                'Sunucu CORS hatası verir'
            ],
            answer: 0,
            explain: 'multipart/form-data parçaları ayırmak için boundary değerine ihtiyaç duyar; bunu tarayıcının otomatik üretmesine izin verilmelidir.'
        },
        {
            q: '<code>:invalid</code> yerine <code>:user-invalid</code> kullanmanın temel avantajı nedir?',
            options: [
                'Daha hızlı çalışır',
                'Sayfa açılır açılmaz boş zorunlu alanları kırmızıya boyamaz; kullanıcı etkileşime girdikten sonra uyarır',
                'Sunucu doğrulamasının yerini alır',
                'Sadece e-posta alanlarında çalışır'
            ],
            answer: 1,
            explain: ':invalid daha kullanıcı hiçbir şey yazmadan formu hatalı gösterir; :user-invalid ise etkileşim sonrası devreye girerek çok daha iyi UX sunar.'
        }
    ];

    let quizIndex = 0;
    let quizScore = 0;

    function renderQuiz() {
        if (!quizContainer || !quizScoreBadge) return;

        if (quizIndex >= QUIZ_QUESTIONS.length) {
            quizScoreBadge.textContent = `Sonuç: ${quizScore} / ${QUIZ_QUESTIONS.length}`;
            quizScoreBadge.className = quizScore >= 5 ? 'form-badge valid' : 'form-badge';
            const msg = quizScore === QUIZ_QUESTIONS.length
                ? 'Mükemmel! Web Forms & Client-Side Tools mimarisi tam oturdu.'
                : quizScore >= 4
                    ? 'Çok iyi! Birkaç küçük detaya Doğru vs Yanlış sekmesinden bakabilirsin.'
                    : 'Tekrar deneyelim — üstteki Doğru vs Yanlış deneyleri tüm cevapları canlı gösteriyor.';

            quizContainer.innerHTML = `
                <div class="quiz-summary">
                    <div class="quiz-summary-score">${quizScore} / ${QUIZ_QUESTIONS.length}</div>
                    <p class="matrix-intro">${msg}</p>
                    <button type="button" class="btn btn-primary" id="btnQuizRestart" style="flex:0;min-width:180px;">↺ Sınavı Yeniden Başlat</button>
                </div>
            `;
            const restartBtn = document.getElementById('btnQuizRestart');
            if (restartBtn) {
                restartBtn.addEventListener('click', () => {
                    quizIndex = 0;
                    quizScore = 0;
                    renderQuiz();
                    playBeep(560, 'sine', 0.05);
                });
            }
            return;
        }

        const item = QUIZ_QUESTIONS[quizIndex];
        const pct = Math.round(((quizIndex) / QUIZ_QUESTIONS.length) * 100);
        quizScoreBadge.textContent = `Soru ${quizIndex + 1} / ${QUIZ_QUESTIONS.length} · Puan: ${quizScore}`;
        quizScoreBadge.className = 'form-badge';

        quizContainer.innerHTML = `
            <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
            <p class="quiz-question">${quizIndex + 1}. ${item.q}</p>
            <div class="quiz-options">
                ${item.options.map((opt, idx) => `<button type="button" class="quiz-opt-btn" data-opt="${idx}">${String.fromCharCode(65 + idx)}) ${opt}</button>`).join('')}
            </div>
            <div id="quizFeedbackArea"></div>
        `;

        const optBtns = quizContainer.querySelectorAll('.quiz-opt-btn');
        const feedbackArea = document.getElementById('quizFeedbackArea');

        optBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const chosen = Number(btn.dataset.opt);
                const isCorrect = chosen === item.answer;
                if (isCorrect) {
                    quizScore++;
                    playSuccessChime();
                } else {
                    playErrorBuzz();
                }

                optBtns.forEach((b, i) => {
                    b.disabled = true;
                    if (i === item.answer) b.classList.add('correct');
                    else if (i === chosen) b.classList.add('wrong');
                });

                quizScoreBadge.textContent = `Soru ${quizIndex + 1} / ${QUIZ_QUESTIONS.length} · Puan: ${quizScore}`;

                if (feedbackArea) {
                    feedbackArea.innerHTML = `
                        <div class="quiz-feedback ${isCorrect ? 'ok' : 'bad'}">
                            <strong>${isCorrect ? '✓ Doğru!' : '✗ Yanlış.'}</strong> ${item.explain}
                        </div>
                        <div style="margin-top:0.75rem;display:flex;justify-content:flex-end;">
                            <button type="button" class="btn btn-secondary" id="btnQuizNext">${quizIndex === QUIZ_QUESTIONS.length - 1 ? 'Sonucu Gör →' : 'Sonraki Soru →'}</button>
                        </div>
                    `;
                    const nextBtn = document.getElementById('btnQuizNext');
                    if (nextBtn) {
                        nextBtn.addEventListener('click', () => {
                            quizIndex++;
                            renderQuiz();
                        });
                    }
                }
            });
        });
    }

    renderQuiz();

    // ==========================================================================
    // 11. Canlı Çalışma Süresi Saati (Uptime Counter)
    // ==========================================================================
    let uptimeSeconds = 0;
    setInterval(() => {
        uptimeSeconds++;
        const hrs = String(Math.floor(uptimeSeconds / 3600)).padStart(2, '0');
        const mins = String(Math.floor((uptimeSeconds % 3600) / 60)).padStart(2, '0');
        const secs = String(uptimeSeconds % 60).padStart(2, '0');
        uptimeClock.textContent = `Çalışma Süresi: ${hrs}:${mins}:${secs}`;
    }, 1000);

    // Başlangıç ilk kontrolleri
    updateLivePayloadPreview();
    checkOverallFormValidity();
});