// Glossary definitions for WBD Situation Room
const glossary = {
  '14d-9': {
    term: '14D-9 Statement',
    definition: 'A solicitation/recommendation statement filed with the SEC by a target company in response to a tender offer, stating whether the board recommends shareholders accept or reject the offer.'
  },
  'tender-offer': {
    term: 'Tender Offer',
    definition: 'A public offer to purchase shares directly from shareholders, typically at a premium to the current market price, for a specified period of time.'
  },
  'hostile-takeover': {
    term: 'Hostile Takeover',
    definition: 'An acquisition attempt made directly to shareholders without the approval or cooperation of the target company\'s board of directors.'
  },
  'hsr-act': {
    term: 'HSR Act',
    definition: 'Hart-Scott-Rodino Antitrust Improvements Act - requires companies to notify federal antitrust agencies before completing mergers or acquisitions above certain thresholds.'
  },
  'reverse-breakup-fee': {
    term: 'Reverse Breakup Fee',
    definition: 'A payment from the buyer to the seller if the buyer fails to complete the transaction, typically due to financing failure or regulatory rejection.'
  },
  'breakup-fee': {
    term: 'Breakup Fee',
    definition: 'A payment from the seller to the buyer if the seller terminates the agreement, typically to accept a superior proposal.'
  },
  'junior-lien': {
    term: 'Junior Lien',
    definition: 'A debt obligation that ranks below senior debt in priority of payment. In bankruptcy, junior lien holders are paid only after senior lien holders are fully satisfied.'
  },
  'liability-management': {
    term: 'Liability Management Exercise (LME)',
    definition: 'A series of transactions designed to restructure a company\'s debt profile, typically involving tender offers, exchanges, and covenant modifications to improve financial flexibility.'
  },
  'proration': {
    term: 'Proration',
    definition: 'When demand for a tender offer or exchange exceeds the specified cap, acceptance of tendered securities on a proportional basis rather than first-come, first-served.'
  },
  'spin-off': {
    term: 'Spin-Off',
    definition: 'A corporate action where a company distributes shares of a subsidiary or division to its shareholders, creating a new independent publicly traded company.'
  },
  'exchange-ratio': {
    term: 'Exchange Ratio',
    definition: 'The number of shares of the acquiring company that will be exchanged for each share of the target company in a stock-for-stock transaction.'
  },
  'materiality': {
    term: 'Material Adverse Effect (MAE)',
    definition: 'A significant negative change in a company\'s business, assets, or financial condition that gives the buyer the right to terminate the transaction.'
  }
};

// Initialize glossary tooltips
document.addEventListener('DOMContentLoaded', function() {
  const glossaryTerms = document.querySelectorAll('.glossary-term');
  
  // Create tooltip container (reusable)
  let tooltip = document.getElementById('glossary-tooltip');
  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.id = 'glossary-tooltip';
    tooltip.className = 'glossary-tooltip';
    tooltip.style.display = 'none';
    document.body.appendChild(tooltip);
  }
  
  glossaryTerms.forEach(term => {
    term.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const termKey = this.dataset.term;
      const definition = glossary[termKey];
      
      if (definition) {
        // Update tooltip content
        tooltip.innerHTML = `
          <div class="glossary-tooltip-header">
            <strong>${definition.term}</strong>
            <button class="glossary-close" aria-label="Close">&times;</button>
          </div>
          <div class="glossary-tooltip-body">
            ${definition.definition}
          </div>
        `;
        
        // Position tooltip
        const rect = this.getBoundingClientRect();
        const tooltipHeight = 200; // approximate
        const spaceBelow = window.innerHeight - rect.bottom;
        
        if (spaceBelow > tooltipHeight) {
          // Show below the term
          tooltip.style.top = (rect.bottom + window.scrollY + 8) + 'px';
        } else {
          // Show above the term
          tooltip.style.top = (rect.top + window.scrollY - tooltipHeight - 8) + 'px';
        }
        
        tooltip.style.left = Math.max(16, rect.left + window.scrollX - 150) + 'px';
        tooltip.style.display = 'block';
        
        // Add close button handler
        const closeBtn = tooltip.querySelector('.glossary-close');
        closeBtn.addEventListener('click', function() {
          tooltip.style.display = 'none';
        });
      }
    });
  });
  
  // Close tooltip when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.glossary-term') && !e.target.closest('.glossary-tooltip')) {
      tooltip.style.display = 'none';
    }
  });
  
  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      tooltip.style.display = 'none';
    }
  });
});
